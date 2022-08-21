/**
 * 배열의 length
 * 배열에서 가장 높은 인덱스를 추적
 */

const arr = [1, 2, 3];

arr[9] = undefined;

console.log(arr); // [ 1, 2, 3, <6 empty items>, undefined ]
console.log(arr.length); // 10

arr.forEach((el) => console.log(el)); // 1 2 3 undefined

arr.length = 20;

console.log(arr); // [ 1, 2, 3, <6 empty items>, undefined, <10 empty items> ]
console.log(arr.length); // 20

arr.length = 0;
console.log(arr); // []
console.log(arr.length); // 0