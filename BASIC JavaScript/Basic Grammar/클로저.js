/**
 * Closure
 */

function returnX() {
    return 'x';
}

const x = returnX();

console.log(typeof x);  // string


function returnY() {
    let x = 'y';

    return function returnZ() {
        return y + 'z';
    };
};
 

const y = returnY();

console.log(typeof y);  // function


function returnChar(x) {
    let outerChar = x;

    return function returnChar2(y) {
        let innerChar = y;

        return outerChar + innerChar;
    };
};

const charx = returnChar('x');


function sum(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

const sum5 = sum(5);
console.log(sum5(10)); // 15