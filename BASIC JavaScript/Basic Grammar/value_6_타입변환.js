/**
 * 암시적 & 명시적 형 변환 
 */

const result1 = 1 + '입니다';

console.log(typeof result1); // string 
console.log(result1); // 1입니다

const result2 = '11' + 11;
console.log(typeof result2); // string 
console.log(result2); // 1111

const result3 = '2' * '2';
console.log(typeof result3); // number 
console.log(result3); // 4


const result4 = ['111'] + 111;
console.log(typeof result4); // string 
console.log(result4); // 111111



const result5 = String(1) + '입니다';

console.log(typeof result5); // string 
console.log(result5); // 1입니다


const result6 = Number('11') + 11;
console.log(typeof result6); // number 
console.log(result6); // 22

const result7 = Number('2') * '2';
console.log(typeof result7); // number 
console.log(result7); // 4

const result8 = Number(String(['111'])) + 111;
console.log(typeof result8); // number 
console.log(result8); // 222