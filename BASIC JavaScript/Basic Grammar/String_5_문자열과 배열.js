/**
 * 문자열과 배열
 */

const words = 'HE,LLO,WO,RLD'
console.log(words.split(',')); // [ 'HE', 'LLO', 'WO', 'RLD' ]

const words_data = ['HE', 'LLO', 'WO', 'RLD']; 
console.log(words_data.join('')); // HELLOWORLD

console.log([...words]); // ['H', 'E', ',', 'L', 'L', 'O', ',', 'W', 'O', ',', 'R', 'L', 'D']
console.log(words.length); // 13

const data = ['1', 2, 3];
console.log(data.length); // 3