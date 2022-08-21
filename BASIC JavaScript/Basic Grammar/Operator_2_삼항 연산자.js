/**
 * 삼항 연산자 (Ternary Operator)
 * 3개의 피연산자, 조건 연산자
 */

const val  = (조건) ? 참일때 : 거짓일때


let val2;

if (조건) {
    return val2 = 참일때;
} else {
    return val2 = 거짓일때;
}


const age = 20;
const isAdult = age >= 20 ? '성인' : '미성년자';
console.log(isAdult); // 성인