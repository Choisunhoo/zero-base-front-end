/**
 * Not a Number
 * 숫자로 읽어낼 수 없다.
 * 잘못된 계산 결과식
 * 정의할 수 없는 결과식 
 * 문자열이 포함된 계산식 (덧셈 제외)
 */


// 느슨하게 검사 
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN('문자열')); // true

// ES2015+ (엄격하게 검사)

console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN('문자열')); // false