/**
 * 인스턴스
 */

const me = {
    name: 'jang',
    age: 10,
    location: 'korea',
};

const me2 = {
    name: 'jang',
    age: 10,
    location: 'korea',
};

const you = {
    name: 'soru',
    age: 20,
    loaction: 'japan',
}

console.log(me === me2); // false
console.log(me.name === me2.name); // true

console.log(me === you) // false