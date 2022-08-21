/**
 * typeof
 * primitive => string, number, bigint, boolean, undefined, symbol, null
 */

const str = 'string';
const func = function(){};

console.log(typeof str); // string
console.log(typeof 123); // number
console.log(typeof 1n); // bigint
console.log(typeof true); // boolean
console.log(typeof Symbol()); // symbol
console.log(typeof undefined); // undefined
console.log(typeof func); // function
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object