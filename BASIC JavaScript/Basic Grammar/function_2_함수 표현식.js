/**
 * 함수 표현식
 */


// 함수는 중복 선언이 가능하고 이런 경우에 마지막에 선언한 함수만 표현된다 
function sum(param1, param2) {
    return param1 + param2
}

function sum(param1, param2) {
    return 'param1 + param2'; 
}

console.log(sum()); // param1 + param2

// 기명 항수 표현식 
const func =  function func() {
    return 'function'
}

// 익명 함수 표현식 
const func_1 = function() {
    return 'func';
};