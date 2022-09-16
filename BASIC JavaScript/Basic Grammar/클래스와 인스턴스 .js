/**
 * 클래스 확장 
 */


class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
        return (
            this.name + '가(이)' + this.sound + '소리를 낸다.'
        );
    }
}

class Friends extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }
}

const dog = new Friends('개', '멍멍');
const cat = new Friends('고양이', '냐옹');

console.log(dog.getInfo()); //  개가(이)멍멍소리를 낸다.
console.log(cat.getInfo()); //  고양이가(이)냐옹소리를 낸다.


console.log(dog.constructor.name); // Friends
console.log(cat.constructor.name); // Friends


console.log(dog instanceof Friends); // true
console.log(dog instanceof Animal); // true

console.log(cat instanceof Friends); // true
console.log(cat instanceof Animal); // true