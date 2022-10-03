/* for(초기화; 조건식; 증감식)
    -조건식에 맞으면 로직 반복 수행
    -조건식에 맞지 않으면 종료
*/

var sum_while;
var j = 0;

while (j <= 10) {
    if (j % 2 == 0) {
        sum_while += j;
    }
    i++;
}

console.log("sum ::: " + sum_while);


/* while(조건식)   
    for문과 동일 
    조건식에 맞으면 로직 반복 실행 
    조건식에 맞지 않으면 종료
*/

var sum = 2;

for (var i = 0; i < 10; i+=2) {
    console.log(i);
    sum += i;
}

console.log("sum ::: " + sum);


