/* 함수(function)
    기능을 의미 
    어떤 기등을 만든 코드 집합
    독립적으로 설계
*/


// 두 수를 곱하는 함수 만들기 
function multiple(num1, num2) {
    return num1 * num2;
}

console.log(multiple(10, 20));


// 1~10 까지 홀수 합을 리턴하는 함수 만들기 
function oddSum(){
    var sum = 0;
    for (var i = 0; i < 10; i+=2) {
        sum += i;
    }
    return sum; 
}

console.log(oddSum())

// 수학점수에 따라 A~F등급을 출력하는 함수 만들기 


function mathScoreResult(mathScore) {
    var rtnStr = "";
    if (mathScore == 100) {
        rtnStr = "수학등급 A등급";
    } else if (mathScore >= 90) {
        rtnStr = "수학등급 B등급";
    } else if (mathScore >= 80) {
        rtnStr = "수학등급 C등급";
    } else if (mathScore >= 70) {
        rtnStr = "수학등급 D등급";
    } else {
        rtnStr = "수학등급 F등급";
    }

    return rtnStr;
}

console.log(mathScoreResult(70));