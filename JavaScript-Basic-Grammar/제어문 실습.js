/* 조건문 
    if else 
    조건이 참이면 참인 조건에 걸리는 로직 실행
*/


let myMathScore = 70;
let rtn = "";

if (myMathScore == 100) {
    rtn = "A+";
} else if (myMathScore >= 90) {
    rtn = "A";
} else if (myMathScore >= 80) {
    rtn = "B";
} else if (myMathScore >= 70) {
    rtn = "C";
} else if (myMathScore >= 60) {
    rtn = "D";
} else {
    rtn = "F";
}

console.log("내 수학 등급은??" +rtn+  "등급");


let myScore = "A";
let result = "";

switch(myScore){
    case "A+":
        result = "A+";
        break;
    case "A":
        result = "A";
        break;
    case "B":
        result = "B";
        break;
    case "C":
        result = "C";
        break;  
    case "D":
        result = "D";
        break;   
    case "E":
        result = "E";
        break;
    case "F":
        result = "F";
        break;
}

console.log("내 수학 등급은??" +result+  "등급");
