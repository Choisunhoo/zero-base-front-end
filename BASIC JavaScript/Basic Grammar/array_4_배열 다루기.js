/**
 * 배열 다루기
 */

const Members = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// 배열의 끝에 요소 추가
Members.push('I');
console.log(Members); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ];

// 배열의 앞에 요소 추가
Members.unshift('Z');
console.log(Members); // [ 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ];

// 배열안에 있는 특정 원소의 인덱스 찾기
console.log(Members.indexOf('X')); // -1 (존재하지 않음)
console.log(Members.indexOf('B')); //  2 (존재하는 index의 번호를 반환)
console.log(Members.lastIndexOf('B')); //  2 (존재하는 index의 번호를 반환)


// 배열안에 있는 특정 원소의 존재 여부 확인
console.log(Members.includes('X'));  // false
console.log(Members.includes('B'));  // true

// 배열의 앞 요소 지우기 
Members.shift();
console.log(Members); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ];

// 배열의 끝 요소 지우기 
Members.pop();
console.log(Members); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];

// 배열에서 특정 인덱스 요소 지우기
Members.splice(2, 3);
console.log(Members); // [ 'A', 'B', 'F', 'G', 'H' ];