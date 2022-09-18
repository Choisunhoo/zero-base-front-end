// CommonJS (Import)

const Person = require('./module_export');

const me = new Person('jang', 10, 'Korea');
const you = new Person('Kim', 21, 'Korea');

console.log(me.getName());
console.log(you.getName());
