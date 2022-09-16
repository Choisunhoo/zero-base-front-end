/**
 * 프로토타입 체인
 */

{
    const a = 'outer';
    {
        console.log(a); // outer
    }
}


[1, 2, 3]
    .sort((a, b) => a - b)
    .filter((e) => typeof e === 'number')
    .map((e) => e + 'EA');


const animal = {
    sayName() {
        return 'ANIMAL';
    },
};

console.log(animal.sayName()); // ANIMAL

const dog = Object.create(animal);

console.log(dog.sayName()); // ANIMAL
