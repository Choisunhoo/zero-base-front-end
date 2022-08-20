/**
 * 문자열로 변환
 */

console.log(String(123)); // 123
console.log(String(undefined)); // undefined
console.log(String(null)); // null
console.log(String({})); // [object Object]
console.log(String({name: 'sol'})); // [object Object]
console.log(String([1, 2, 3])); // 1,2,3
console.log(JSON.stringify({ name: 'sol'})) // {"name":"sol"}

console.log(['1, 123'].toString()); //