/**
 * 문자열 병합 
 */

function genHello(name) {
    return '안녕하세요 ' + (name ? name : '이름없음') + '님 안녕하세요';
}

console.log(genHello('Sol'));
console.log(genHello());

function genHello_1(name) {
    const resultName = name ? name : '이름없음';
    return '안녕하세요 ' + resultName + '님 안녕하세요';
}

console.log(genHello_1('Sol'));
console.log(genHello_1());
