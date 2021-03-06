import eleTree from '~/entry'
import '~/public/css/icon.css'
import ajax from '~/opera/ajax'

let btn = document.querySelector('button')
let search = document.querySelector('.search')
let ele = eleTree({
    el: '.eletree',
    // data: data,
    method: 'post',
    url: '/api/tree',
    where: {
        a: 'aaa'
    },
    showCheckbox: true,
    // showLine: true,
    highlightCurrent: true,
    // defaultExpandAll: true,
    // expandOnClickNode: false,
    // checkOnClickNode: true,
    // radioOnClickNode: true,
    defaultExpandedKeys: ['001','001002001'],
    // autoExpandParent: true,
    // checkStrictly: true,
    // defaultCheckedKeys: ['001002002002','001002002003'],
    // accordion: true,
    // indent: 26,
    // done: function(data) {
    //     console.log(data)
    // },
    request: {
        name: "label",
        key: "id",
        children: "children",
        disabled: "disabled",
        checked: "checked",
        isOpen: "isOpen",
        isLeaf: "isLeaf",
        radioChecked: "radioChecked",
        radioDisabled: "radioDisabled"
    },
    icon: {
        fold: "fold.png",
        leaf: "leaf.png",
        checkFull: ".eletree_icon-check_full",
        checkHalf: ".eletree_icon-check_half",
        checkNone: ".eletree_icon-check_none",
        dropdownOff: "dropdownOff.png",
        dropdownOn: "dropdownOn.png",
        loading: "",
        // radioCheck: "radioCheck.png",
        // radioCheckNone: "radioCheckNone.png",
    },
    // lazy: true,
    rightMenuList: ["copy", "paste", "paste_before", "paste_after", "cut_paste", "edit", "remove", "add_child", "add_before", "add_after", {name: '选中', value: 'checked'}],
    showRadio: true,
    // radioType: "level", // all
    // defaultRadioCheckedKeys: ['002', '001002002002']
})
let index = 1
btn.onclick = function() {
    // getChecked
    {
        // console.group('getChecked: ')
        // let res = ele.getChecked()
        // console.log(res)
        // console.groupEnd()
    }
    // setChecked
    {
        // console.group('setChecked: ')
        // let res = ele.setChecked(['001002002002'], false)
        // console.log(res)
        // console.groupEnd()
    }
    // append
    {
        // console.group('append: ')
        // let res = ele.append('001002002002',[
        //     {
        //         label: `添加子节点${index++}`,
        //         id: `append${index}`,
        //         // checked: true,
        //         children: [
        //             {
        //                 label: `子节点${index++}`,
        //                 id: `append2${index}`,
        //                 checked: true,
        //             }
        //         ]
        //     }
        // ])
        // console.log(res)
        // console.groupEnd()
    }
    // updateKeySelf
    {
        // console.group('updateKeySelf: ')
        // let res = ele.updateKeySelf('001002002002',{
        //     label: `修改节点${index++}`,
        //     // id: `addChild${index}`,
        //     // disabled: true,
        //     checked: true
        // })
        // console.log(res)
        // console.groupEnd()
    }
    // unChecked
    {
        // console.group('unChecked: ')
        // let res = ele.unChecked()
        // console.log(res)
        // console.groupEnd()
    }
    // expandAll
    {
        // console.group('expandAll: ')
        // let res = ele.expandAll()
        // console.log(res)
        // console.groupEnd()
    }
    // unExpandAll
    {
        // console.group('unExpandAll: ')
        // let res = ele.unExpandAll()
        // console.log(res)
        // console.groupEnd()
    }
    // remove
    {
        // console.group('remove: ')
        // let res = ele.remove(['001002002001','001002002002','003'])
        // console.log(res)
        // console.groupEnd()
    }
    // insert
    {
        // console.group('insert: ')
        // let res = ele.insert('001002002002', [
        //     {
        //         label: `插入节点${index++}`,
        //         id: `insert${index}`,
        //         checked: true
        //     }
        // ], 'before')
        // console.log(res)
        // console.groupEnd()
    }
    // reload
    {
        // console.group('reload: ')
        // let res = ele.reload({
        //     url: '/api/maxdata'
        // })
        // console.log(res)
        // console.groupEnd()
    }
    // search
    {
        // console.group('search: ')
        // let res = ele.search(search.value, function(value, data) {
        //     // data为每个节点数据，函数返回true则显示该节点
        //     if (!value) return true;
        //     return data.label.indexOf(value) !== -1;
        // })
        // console.log(res)
        // console.groupEnd()
    }
    // getRadioChecked
    {
        // console.group('getRadioChecked: ')
        // let res = ele.getRadioChecked()
        // console.log(res)
        // console.groupEnd()
    }
    // setRadioChecked
    {
        // console.group('setRadioChecked: ')
        // let res = ele.setRadioChecked(['001002002003','003'])
        // console.log(res)
        // console.groupEnd()
    }
    // unRadioChecked
    {
        // console.group('unRadioChecked: ')
        // let res = ele.unRadioChecked(['001002002001'])
        // console.log(res)
        // console.groupEnd()
    }
    // getAllNodeData
    {
        // console.group('getAllNodeData: ')
        // let res = ele.getAllNodeData()
        // console.log(res)
        // console.groupEnd()
    }
}

ele.on('lazyload', function(d) {
    var {data, load} = d
    if(data.id === "001002002003"){
        ajax({
            method: 'post',
            url: '/api/lazyData',
            data: {id: data.id}
        }).then(d=>{
            load(d)
        })
    }else{
        load([])
    }
    
})

ele.on('checkbox', function(data) {
    // console.log(this)
    // console.log(data)
})
ele.on('click', function(data) {
    // console.log(this)
    console.log(data)
})
ele.on('edit', function(data) {
    console.log(data)
    setTimeout(() => {
        data.load()
        // data.stop()
    }, 500);
})
ele.on('add_child', function(data) {
    // console.log(this)
    console.log(data)
    setTimeout(() => {
        data.load({
            id: '999',
            checked: true
        })
        // data.stop()
    }, 500);
})
ele.on('custom_checked', function(data) {
    // console.log(this)
    console.log(data)
    setTimeout(() => {
        ele.setChecked([data.data.id], false)
        data.load()
        // data.stop()
    }, 500);
})