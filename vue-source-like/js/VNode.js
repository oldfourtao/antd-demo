/**
 * create zhangtao by 20210416
 * 创建VNode 将正式dom转换为虚拟dom 
 */

class VNode {
    constructor(tag,data,value,type){
        this._tag = tag && tag.toLowerCase();
        this._data = data;
        this._value = value;
        this._type = type;
        this._children = [];
    }

    appendChild(node){
        this._children.push(node)
    }
}


//创建vonde 递归创建
let _getVNode = function(node){
    let _vnode = null;
    let nodeType = node.nodeType;//获取元素类型
    let nodeName = node.nodeName;//获取元素节点
    if(nodeType === 1){
        //处理元素
        let attrObjs = {};//处理属性对象
        let attrs = node.attributes;
        //console.log(attrs);
        for(let i = 0 ; i< attrs.length ; i ++ ){
            attrObjs[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        _vnode = new VNode(nodeName,attrObjs,undefined,nodeType);
        console.log(attrObjs);
        //处理子元素
        let childNodes = node.childNodes;
        for(let i = 0; i < childNodes.length; i++ ){
            _vnode.appendChild( _getVNode(childNodes[i]) );//递归对子元素创建vnode 
        }
    }else if(nodeType == 3){
        //处理文本
        _vnode = new VNode(undefined,undefined,node.nodeValue,nodeType);
    }

    return _vnode;

}


/**
 * 将虚拟dom转换为真实dom
 * @param {*虚拟dom} vnode
 * 
 */
let _getRealDom = function(vnode){
    let type = vnode._type;//元素类型
    let _node = null;
    if(type === 3){
        //文本节点
        return document.createTextNode(vnode._value);//创建文本节点
    }else if(type === 1){
        //处理元素
        //创建元素节点
        _node = document.createElement(vnode._tag);
        //处理元素属性
        let data = vnode._data
        Object.keys(data).forEach( key => {
            _node.setAttribute(key,data[key]);//设置属性
        })

        let childNodes = vnode._children;
        childNodes.forEach((subNode) => {
            _node.appendChild( _getRealDom(subNode) );//递归创建子节点
        })
        console.log()
        return _node;
    }
}