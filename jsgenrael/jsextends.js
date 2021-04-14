(function(){
    function  Person(){};
let p1 = new Person;
p1.name = 'zhangsan';
p1.age = 28;
//Person 构造函数 
console.log(p1.__proto__ == Person.prototype);
console.log(Person == Person.prototype.constructor);
console.log(Object.getPrototypeOf(p1) == Person.prototype)})()//获取原型


var a = 1;

function bar(){
    var a = 2;
    foo();
}
function foo(){
    console.log(a);
}
bar();






