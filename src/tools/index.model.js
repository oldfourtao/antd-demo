//vue响应式原理 数据劫持+发布者订阅模式
let Dep = {
    clientlist: {},
    lister: function (key,fn) {
        (this.clientlist[key] || (this.clientlist [key] = [])).push(fn);
    },
    trigger: function() {
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientlist[key];
            if(!fns || fns.length == 0) return false;
            for (let i = 0,fn; fn = fns[i++];) {
               fn.apply(this,arguments); 
            }
    },
}

let responsiveFn = function({data,tag,key,selector}) {
    let value ='';
        el = document.querySelector(selector);
    Object.defineProperty(data,key,{
            get:() => {
                return value;
            },
            set:(newVal) => {
                value = newVal;
                Dep.trigger(tag,newVal);
            }
        })
    Dep.lister(tag,function(text){
        el.innerHTML = text;
    })
}