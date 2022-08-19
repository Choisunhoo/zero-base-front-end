/**
 * - Logical Operator (논리 연산자)
 * OR - ||
 * AND - &&
 * NOT - !
 */


console.log(true || false); // true 
console.log(false || true); // true 
console.log(false || false); // false


console.log(true && true); // true 
console.log(true && false); // false 
console.log(false && true && true); // false
console.log(false && false); // false


const age = 17; 
const genderType = 'GIRL';
const isAdult = age > 19;
const isGirl = genderType === 'GIRL'


if (!isAdult) {
    console.log('나는 성인이 아니다');
}

if (isAdult || isGirl) {
    if (genderType === 'GIRL') {
        console.log('여학생이다');
    }
}

function getName(firstName, lastName) {
    const fName = firstName === undefined ? '성 없음' : lastName;
    const lName = firstName === undefined ? '이름 없음' : firstName;

    return '저는 ' + lName + '' + fName + '입니다.'
}

console.log(getName('최', '선호'));