/* 값(value)
    - 조작 가능한 어떤 표현
    - 문자열, 문자, 숫자 등이 가짐
    - 피연산자 + 연산자 
*/

// 원시 값 
let myAge = 10;
myAge = 20;

// 참조 값 
let myInfo = {age:10};
myInfo.age = 20;


/* 값(value) 출력 방법
    1. console.log
    2. alert
    3. document.write
    4. innerHTML
*/

console.log(10);
alert(myAge);
document.write("document.write :::" + myAge);
document.getElementById("id").innerHTML = "innerHTML ::: "+myAge; 