/**
 * 요소 정렬
 */

const numbers = [4, 2, 5, 1, 3];

const orderNumbers = numbers.sort(function(a, b) {
    return a - b
})

console.log(orderNumbers); // [ 1, 2, 3, 4, 5 ]


const orderNumbers_1 = numbers.sort(function(a, b) {
    return b - a
})

console.log(orderNumbers); // [ 5, 4, 3, 2, 1 ]

const alpha = ['a', 'd', 'c', 'z', 'f'];


const orderAlpha_1 = alpha.sort(function(a, b){
    return a.localeCompare(b);
})

console.log(orderAlpha_1); // [ 'a', 'c', 'd', 'f', 'z' ]

const orderAlpha = alpha.sort(function(a, b){
    return b.localeCompare(a);
})

console.log(orderAlpha); // [ 'z', 'f', 'd', 'c', 'a' ]