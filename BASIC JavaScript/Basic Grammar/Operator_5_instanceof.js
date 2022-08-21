/**
 * instanceof 
 * 객체의 인스턴스가 어떤 생성자로 생성이 된 것인지
 * {} instance of Object
 */

const obj = {};
const arr = [];
const func = function () {};

console.log(obj instanceof Object);  // true 
console.log(arr instanceof Array);  // true 
console.log(func instanceof Function);  // true 

console.log(undefined instanceof Object); // false
console.log(null instanceof Object); // false

console.log(obj instanceof Object);  // true 
console.log(arr instanceof Object);  // true 
console.log(func instanceof Object);  // true 
console.log(new Date() instanceof Object);  // true 