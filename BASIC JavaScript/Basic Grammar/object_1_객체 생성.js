/**
 * 객체 생성
 */

// 싱글 리터럴 객체 
const object = {
    property: 'value',
    method: function() {},

};


function NewObject(name) {
    this.name = name; 
}

const newObject = new NewObject('park');
console.log(newObject); // NewObject { name: 'park' }

const newObject2 = Object.create(
    Object.prototype, 
    {
        name: {
            value: 'park',
            writable: true,
            enumerable: true,
            configurable: true, 
        },
    },
);  

newObject2.name = 'Kim'; 
console.log(newObject2); // { name: 'Kim' }
