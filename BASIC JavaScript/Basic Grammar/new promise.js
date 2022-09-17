/**
 * New Promise
 */

const one = Promise.resolve('1');
const two = (delay) =>
    new Promise((resolve) => 
        setTimeout(() => {
            resolve('2');
        }, delay),
    );
const three = Promise.resolve('3');


one.then((oneRes) => {
    console.log(oneRes)  // 1

    return two(3000)
}).then((twoRes) => {  
    console.log(twoRes);  // 2

    return three;
}).then((threeRes) => {
    console.log(threeRes);  // 3
})
.finally(() => console.log('END'));  // END

setTimeout(() => {}, 1000);


const cafe = function(beverageName) {
    return new Promise((resolve, reject) => {
        if (beverageName === 'Americano') {
            resolve('Here is a cup of Americano') ;
        } else {
            reject('There is no other beverage rather than Americano');
        }
    });
};

cafe('Americano')
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej))
    .finally(() => console.log('감사합니다.'));