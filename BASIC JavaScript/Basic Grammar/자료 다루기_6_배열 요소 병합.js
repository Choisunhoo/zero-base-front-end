/**
 * 배열 요소 병합
 */


const array =  ['JS', 'HTML', 'CSS'];

const newArr = array.concat('TS');

console.log(array); // [ 'JS', 'HTML', 'CSS' ]
console.log(newArr); // [ 'JS', 'HTML', 'CSS', 'TS' ]

const newArr_1 = ['TS', 'Java'].concat(array);
console.log(newArr_1); //  [ 'TS', 'Java', 'JS', 'HTML', 'CSS' ]

const newArr_2 = [...array, 'C++', 'Python'];
console.log(newArr_2); // [ 'JS', 'HTML', 'CSS', 'C++', 'Python' ]

const other = ['Vue', 'React'];
const newArr_3 = [...array, ...other];
console.log(newArr_3); // [ 'JS', 'HTML', 'CSS', 'Vue', 'React' ]
