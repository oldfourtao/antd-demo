/**
 * 防抖和节流
 * 防抖，高频触发在n秒内只执行1次
 */

const debounce = function(fn,delay){
    let timeoutId = null;
    return function(){
        if(timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            fn.apply(this,arguments);
        },delay);
    }
}

function fn(){
    console.log('防抖触发！！！！');
}


const throttle = function(fn,delay) {
    let canRun = true;
    return function() {
        if(!canRun) return; 
        canRun = false;//
        setTimeout(()=>{
            fn.apply(this,arguments);
            canRun = true;//保证下一次执行
        },delay);
    }
}