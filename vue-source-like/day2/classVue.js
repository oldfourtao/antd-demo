/**
 * 封装vue源码实现
 * 
 * 采用es class 写法
 * 
 * 1 获取模版
 * 
 * 2 获取数据
 * 
 * 3 模版于数据相结合 
 * 
 * 4 渲染到页面中
 */


class ZTVue{
    constructor(option){
        this._el = option.el;
        this._data = option.data;
        this.$el = this._templateDom = document.querySelector(this._el);
        this._parent = this._templateDom.parentNode;

        //动态获取 解析数据嵌套对象 如 a: {b: {c: {d:{.....}}}}格式数据 path格式 a.b.c.d.e
        let getValuePath= (path)=>{
            let paths = path.split('.');
            let prop = null;
            let res = this._data;
            while(prop = paths.shift()){
                console.log(prop);
                res = res[prop];
            }
            return res;
        }


        //解析模版
        let compiler = function(template,data){
            let childNodes = template.childNodes;//获取dom元素子节点
            for(let i = 0; i< childNodes.length; i++ ){
                let type = childNodes[i].nodeType;//获取元素类型type == 3 文本 type == 1元素
                if(type === 3){
                    //解析文本
                    let regxKh = /\{\{(.+?)\}\}/g ; //匹配{{}}内容
                    let text = childNodes[i].nodeValue;//获取元素
                    //正则替换
                    text = text.replace(regxKh,function( _, g ) {
                        console.log(g);
                        let path = g.trim();//去除两端空格
                        let value =getValuePath(path);//获取值
                        return value;
                    })
                    childNodes[i].nodeValue = text;//重新给dom元素赋值
                }else if(type === 1){
                    //递归获取文本
                    compiler(childNodes[i],data)
                }
            }
        } 

        //得到模版
        this._render = () => {
            console.log('render');
            this._compiler();
        }

        // 解析模版与数据相结合
         this._compiler = ()=> {
            console.log('compiler');
            let realHtml  = this._templateDom.cloneNode(true);
            compiler(realHtml,this._data)
            this._updateHtml(realHtml)
        }

        //更新试图

         this._updateHtml = (realHtml)=>{
            console.log('update');
            this._parent.replaceChild(realHtml,document.querySelector('#root'))
        }

        
    }
    
}