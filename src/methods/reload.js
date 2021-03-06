import { paramDetection } from '~/opera/tools'
/**
 * 插入节点
 * @param {*重载传入的新参数} opts 
 */
export default function(methods, opts = {}) {
    if(paramDetection(opts, 'Object', 'reload方法第一个参数必须为Object')) return this
    this.reload.call(this, opts)
    return methods
}