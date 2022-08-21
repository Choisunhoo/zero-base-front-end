/**
 * 배열
 * 1. Javascript의 배열은 객체이다 
 * 2. Javascript의 배열은 index와 값을 연결하는 dictionary 형태이다.
 */


const arr = [1, 2, 3];

console.log(arr); // [ 1, 2, 3 ]

const arr2 = new Array(1, 2, 3);

console.log(arr2); // [ 1, 2, 3 ]

console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3

arr[3] = 4;
console.log(arr[3]); // 4

arr.push(5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.length); // 5

arr[9] = 10;
console.log(arr.length); // 10
console.log(arr); // [ 1, 2, 3, 4, 5, <4 empty items>, 10 ]

arr.prop = [6, 7];
console.log(arr); // [ 1, 2, 3, 4, 5, <4 empty items>, 10, prop: [ 6, 7 ] ]