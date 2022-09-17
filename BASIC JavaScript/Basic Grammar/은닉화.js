/**
 * Closure - 은닉화
 */

(function () {
    var a ='a';
})();

console.log(a); // a is not defined

function a() {
    let temp = 'a';

    return temp;
}

const result = a(); 
console.log(result); // a


function privateData() {
    let temp = 'a';

    return {
        value: function() {
            return temp;
        },
        changeValue: function (newVal) {
            temp = newVal;
            return temp
        },
    };
}

const private = privateData();
console.log(private.value()); //  a
console.log(private.changeValue('b')); //  b

const private2 = privateData();
const private3 = privateData();




function CounterApp(initValue) {
    let countValue = initValue ?? 0;

    return {
        value: function() {
            return countValue;
        },
        increment: function () {
            countValue++;
        },
        decrement: function () {
            countValue--;
        }
    };
}

const counter1 = CounterApp(1);
const counter2 = CounterApp(2);

console.log(counter1.value()); // 1
console.log(counter2.value()); // 2

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();

console.log(counter1.value()); // 5
console.log(counter2.value()); // 2
