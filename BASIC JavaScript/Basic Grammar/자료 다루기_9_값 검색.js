/**
 * 값 검색
 */


const foods = ['chicken', 'pizza', 'ramen', 'burger', 'pasta'];

const result = foods.find(function(food) {
    return food === 'pizza'
})

console.log(result); // pizza


const result_1 = foods.indexOf(function(food) {
    return food === 'pizza'
})

console.log(result_1); // -1

const result_2 = foods.lastIndexOf(function(food) {
    return food === 'pizza'
})

console.log(result_2); // -1


const result_3 = foods.includes('pizza');

console.log(result_3); // true
