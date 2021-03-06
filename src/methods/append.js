import reloadVnode from '~/vnode/reloadVnode'
import { getNodeDataById, paramDetection, updateDate } from '~/opera/tools'
import { symbolAttr } from '~/config'
/**
 * 添加子节点
 * @param {*查找节点id，传null或空字符串则会添加到根节点} id 
 * @param {*添加的子节点数据} data 
 */
export default function(methods, id, data) {
    let options = this.config
    let {key, isOpen, checked, children, disabled, isLeaf} = options.request
    if(id === null) id = ''
    if(paramDetection(id, 'String|Number', 'append方法第一个参数必须为String|Number')) return methods
    if(paramDetection(data, 'Array', 'append方法第二个参数必须为Array')) return methods

    // 添加到最外层
    if(id === ''){
        options.data = options.data.concat(data)
        updateDate.call(this)
        reloadVnode.call(this)
        return methods
    }
    let cData = getNodeDataById.call(this, id)
    if(!cData) return methods      // 没找到
    cData[children] = cData[children].concat(data)
    // 添加子节点的时候自动展开当前节点
    cData[isOpen] = 2
    cData[symbolAttr.isRenderChild] = true
    updateDate.call(this, cData)
    reloadVnode.call(this)
    return methods
}