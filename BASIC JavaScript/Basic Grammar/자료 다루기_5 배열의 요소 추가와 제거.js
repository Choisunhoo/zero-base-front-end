/**
 * unshift => 배열의 앞에 요소 추가
 * push => 배열의 끝에 요소 추가
 * shift => 배열의 앞에 요소 제거 
 * pop => 배열의 끝에 요소 제거 
 * splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제
 */

const arr = ['one', 'two', 'three'];

// 배열의 끝에 요소추가
arr.push(1);
arr.push(2);

console.log(arr); // [ 'one', 'two', 'three', 1, 2 ]

// 배열의 앞에 요소추가
arr.unshift(0);
arr.unshift(-0);

console.log(arr); //  [ -0, 0, 'one', 'two', 'three', 1, 2 ]

// 배열의 끝에 요소 제거
arr.pop();
arr.pop();

console.log(arr); //  [ -0, 0, 'one', 'two', 'three' ]

// 배열의 앞에 요소 제거 
arr.shift();
arr.shift();

console.log(arr); // [ 'one', 'two', 'three' ]

// 배열의 인덱스를 기반으로 요소 추가 및 
// splice(시작 인덱스, 삭제할 인덱스의 개수, 추가할 요소)
arr.splice(0, 0, 'four');
console.log(arr); // [ 'four', 'one', 'two', 'three' ]

arr.splice(0, 2, 'seven');
console.log(arr); // [ 'seven', 'two', 'three' ]
