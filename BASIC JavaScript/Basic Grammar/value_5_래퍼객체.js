// 원시값의 래퍼 객체
const bool = false; 
const num = 123;
const str = 'string';


const bool2 = new Boolean(false);
const num2 = new Number(123);
const str2 = new String('string');

console.log(typeof bool); // boolean
console.log(typeof bool2); // object
console.log(bool2 instanceof Boolean); // true
console.log('string' instanceof String); // false

const obj = {
    name: 'jang',
    greeting: function() {
        return 'hello ' + this.name
    }
}

console.log(obj.greeting())  // hello jang
console.log(str.toUpperCase());  // STRING

str.toUpperCase = function() {
    return 'STRING !!!'
}

console.log(str.toUpperCase()); // STRING
