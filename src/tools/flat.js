const arr =[1,2,34,5,6,7,[1,45,78]];
//const result = Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b});
//console.log(result);

let flag = Object.prototype.toString.call(arr);
console.log(flag)
console.log(arr instanceof Array);
console.log(Array.isArray(arr));


const arr1 = ['A1','A2','A3','B1','B2','B3','C1','C2','C3','D1','D2','D3'];
const arr2  = ['A','B','C','D'];
const result = arr2.map(item=>item+3);
console.log(result);


var b = 10;
(function b(b) {
 b.b = 20;
 console.log(b)
})(b)

a =1;

// var a = {
//     i: 1,
//     toString: ()=>{
//         return a.i++
//     }
// }

if(a == 1 && a == 2 && a ==3){
    console.log(1);
}