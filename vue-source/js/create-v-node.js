/**
 * 创建vNODE
 */

 class VNode{
     constructor(tag,data,value,type){
        this._tag = tag;
        this._data = data;
        this._value = value;
        this._type = type;
        this.children=[];
     }

     appendChild(vnode) {
         this.children.push(vnode);
     }
 }

 /**
  * 获取vnode 使用递归遍历dom生成虚拟dom
  * @param {*} params 
  */
 function  getVNode(node) {
     let nodeType = node.nodeType;
     let _vnode =null;
     if(nodeType == 1){
        //元素
        let nodeName = node.nodeName;//HTML 元素
        let attrs = node.attributes;//获取属性
        let attrsObj = {};//元素属性
        for(let i = 0; i<attrs.length; i++){
            attrsObj[attrs[i].nodeName] = attrs[i].nodeValue
        }

        _vnode = new VNode('','','','');
     }else if(nodeType == 3){
        //文本节点
     }
 }