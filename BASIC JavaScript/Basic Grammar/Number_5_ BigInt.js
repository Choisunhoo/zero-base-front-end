/**
 * Bigint
 * 안정적인 범위의 정수
 */

// javascript에서 표현할 수 잇는 제일 큰 양의 숫자 값
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
// javascript에서 안전하게 사용할 수 있는 정수의 최대 값
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 큰 정수를 사용하기 위한 2가지 방법 n, BigInt
console.log(123123123123123123123123123132123123123123123n);
console.log(BigInt(123123123123123123123123123132123123123123123n))

// BigInt는 Number가 아니다
console.log(0n === 0); // false