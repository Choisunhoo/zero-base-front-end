// 객체 Objects 

const Sunho = {
  // key : value
  name: {
    first: 'Sunho',
    last: 'Choi'
  },
  age: 26,
  gender: 'male',
  introduce: function(guest) {
    return 'hello ' + guest + ' my name is SunhoChoi'
  },
  hobby: ['game', 'exercise'],
}


console.log(Sunho['name']['last']);   // output: Choi
console.log(Sunho.name.first);   // output: Sunho
console.log(Sunho.age);   // output: 26
console.log(Sunho.introduce('A'));   // output: hello A my name is SunhoChoi
