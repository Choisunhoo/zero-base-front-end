/**
 * 기타 연산자
 */

let test = (123456, 'ABC');

console.log(test);  // ABC


// 표현식의 결과를 버릴때 void 사용  
console.log(void 1);  // undefined
console.log(void 0);  // undefined
console.log(void (10 + 10));  // undefined

function voidFunction() {}

console.log(voidFunction());  // undefined