/**
 * constructor(생성자)
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


const Sunho = new Person('Sunho', 26, 'male');
const Sol = new Person('Sol', 17, 'male');

console.log(Sunho); // Person { name: 'Sunho', age: 26, gender: 'male' }
console.log(Sol); // Person { name: 'Sol', age: 17, gender: 'male' }


console.log(Sunho.constructor.name); //  Person
console.log(Sol.constructor.name); //  Person

const obj = {};
const array = [];
const func = function() {};
const str = new String('str')

console.log(obj.constructor.name); // Object
console.log(array.constructor.name); // Array
console.log(func.constructor.name); // Function
console.log(str.constructor.name); // String

console.log(obj instanceof Object); // true
console.log(array instanceof Array); // true
console.log(func instanceof Function); // true
console.log(str instanceof String); // true