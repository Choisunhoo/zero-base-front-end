/**
 * Callback +
 */


console.log('1');

setTimeout(() => {
    console.log('2');
}, 1000);

console.log("3");

[1, 2, 3].filter(function (ele) {
    console.log(ele); // 1, 2, 3
});

Array.prototype.filter = function(callback) {
    for (let i = 0; i < Array.length; i++) {
        const element = array[i];
    }
}


Element.addEventListener('click', (e) => console.log(e));

Element.addEventListener = function(eventType, callback) {
    if (eventType === 'click') {
        const clickEventObject = {
            target: {},
        };
        callback(clickEventObject);
    }
}


console.log('1');

function setTimeoutWithCallback(callbackFunc) {
    setTimeout(() => {
        console.log('2');
        callbackFunc()
    }, 1000);
}

setTimeoutWithCallback(() => console.log('3'))


setTimeout_2 (function() {
    console.log('A')

    setTimeout_2(function() {
        console.log('B')

        setTimeout_2(function() {
            console.log('C')
        }, 1000)
    }, 1000)
}, 1000)