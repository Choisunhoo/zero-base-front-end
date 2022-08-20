/**
 * Infinity 
 * 너무 크거나 작을때 
 * 지수 1023 까지만 허용
 */


console.log(Math.pow(2, 1023)); // 8.98846567431158e+307
console.log(Math.pow(2, 1024)); // Infinity
console.log(7 / 0); // Infinity

console.log(isFinite(Math.pow(2, 1023))) // true 
console.log(isFinite(Math.pow(2, 1024))) // false
console.log(isFinite(7 / 0)) // false