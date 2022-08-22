/**
 * 화살표 함수
 */

// 함수 안에 있는 인자는 지역변수 처럼 활용가능 
function func(params) {
    params = params + 10

    return params
}

const result = func(1)
console.log(result);  // 11\


function func_1(objP) {
    const p1 = objP.p1;
    const p2 = objP.p2;
    const p3 = objP.p3;
    const p4 = objP.p4;

    console.log(p2, p4); // P2 P4

    return
}

const result_1 = func({
    p2: 'P2',
    p4: 'P4',
})