// 함수 Function 특정 일을 처리하는 코드 묶음

function func() {
  if (10 > 0) {
    return 'Hello';
  }
}

console.log(func()); // output: Hello

function voidFunc() {
  console.log('void func'); // output: void func
}

console.log(voidFunc()); // output: undefined


// 함수 선언문 
function sum(num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2) {
  return num1 * num2
}

// 함수 호출 
console.log(sum(1, 2)); // output: 3
console.log(multiple(1, 2)); // output: 2