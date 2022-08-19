let variable; // 선언 
variable = 'string value' // 할당 

const initValue = '초기화된 변수' // 선언과 동시에 할당 

let variable_1; // 선언 

console.log(variable_1); // output: undefined , (정의되지 않았다)

let variable_2 = null // null을 지정 

console.log(variable_2); // output: null , (비어있다)

console.log(!undefined); // output: true
console.log(!!undefined); // output: false

console.log(Number(undefined)); // output:  NaN
console.log(Number(null));   // output:  0