/** 
객체, 참조 값 (reference value)
 */

const object = {
    name: 'park',
    age: 29,
    arr: [],
    func: function() {

    },
    child: {}
};
const array = [[], 11, 'park', 22, function () {}];
function func() {}

console.log(object instanceof Object); // output: true
console.log(func instanceof Function); // output: true
console.log(array instanceof Array); // output: true


console.log(Object.prototype.toString.call(array)); // output: object Array
console.log(Object.prototype.toString.call(func)); // output: object Function
console.log(Object.prototype.toString.call(Array)); // output: object Array

console.log(typeof func);
console.log(typeof array);


const obj = {
    str: 'string'
}
obj.str.toUpperCase()

console.log(obj); // { str: 'string' }

obj.num = 123;
obj.bool = true;

console.log(obj); // { str: 'string', num: 123, bool: true }

const arr = [1, 2, 3]

console.log(arr[0]);  // output: 1
console.log(arr[1]);  // output: 2
console.log(arr[2]);  // output: 3