/**
 * 생성자
 */

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
        return this.name + '입니다';
    };
} 

const me = new Person('sol', 26, 'korea');
console.log(me); // Person { name: 'sol', age: 26, location: 'korea' }
const you = new Person('soru', 20, 'japan');
console.log(you); // Person { name: 'soru', age: 20, location: 'japan' }

console.log(me.getName()); // sol입니다
console.log(you.getName()); // soru입니다