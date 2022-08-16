// 문 statement 

if (10 > 1) {
  console.log( '10은 1보다 크다.');
} else if (10 === 10) {
  console.log( '같다');
} else {
  console.log( '그외의 값이다.');
};


let array = [5, 4, 3, 2, 1];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
};


if (array.length === 5) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      console.log(array[i]);
    }
  }
}