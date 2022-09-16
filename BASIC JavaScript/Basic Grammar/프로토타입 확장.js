/**
 * 프로토타입 확장 (extends, 상속)
 */

// Super Class 
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.getInfo = function() {
    return (this.name + '가(이)' + this.sound + '소리를 낸다.');
};

// Sub Class
function Friend(name, sound) {
    Animal.call(this, name, sound);
}

Friend.prototype = Object.create(
    Animal.prototype,
);
Friend.prototype.constructor = Friend;

const dog = new Friend("강아지", "멍멍")
const cat = new Friend("고양이", "냥냥")

console.log(dog.getInfo());  //  강아지가(이)멍멍소리를 낸다.
console.log(cat.getInfo()); //  고양이가(이)냥냥소리를 낸다.

console.log(dog.constructor.name); // Friend


console.log(dog instanceof Friend)
console.log(dog instanceof Animal)