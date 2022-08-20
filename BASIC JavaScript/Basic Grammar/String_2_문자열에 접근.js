/**
 * 문자열 접근 
 */

const str = 'ABC';
console.log(str); // ABC
console.log(str.toLowerCase()); // abc

console.log(str.charAt(0)); // A
console.log(str.charAt(1)); // B
console.log(str.charAt(2)); // C

console.log(str[0]); // A
console.log(str[1]); // B
console.log(str[2]); // C

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
console.log(paragraph.includes(searchTerm)); // true 
console.log(paragraph.indexOf(searchTerm)); // 40
console.log(paragraph[40]); // d
console.log(paragraph[41]); // o
console.log(paragraph[42]); // g