/**
 * 정수 (Integer)
 * - 자바스크립트에서 부동소수점(IEEE-754) 숫자만 존재
 * - 정수를 저장하는 2가지 방법 
 * 1. 10진 소수가 없는 작은 숫자는 정수로 오래 유지 (예. 31비트)
 * 2. 비트 연산자를 이용 32비트 정수로 바꿔 반환
 */


// 안전한 정수의 최대값 
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// 안전한 정수의 최소값
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 내림 
console.log(Math.floor(4.2));  // 4
// 올림 
console.log(Math.ceil(4.2));  // 5
// 반올림 
console.log(Math.round(4.2)); // 4