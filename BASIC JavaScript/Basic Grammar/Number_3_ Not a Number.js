/**
 * Not a Number
 */

console.log(Number(undefined)); // NaN
console.log(parseInt('숫자로 변환 불가능한 문자열')); // NaN
console.log(Math.log(-1)); // NaN
console.log(10 + NaN); // NaN
console.log("가나다라" / 10); // NaN
