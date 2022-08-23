/**
 * map 
 * filter
 * reduce
 */


const Langs = ['JS', 'HTML', 'CSS'];

const newLangs = Langs.map(function(lang) {
    return lang + '언어'
})

console.log(newLangs); // [ 'JS언어', 'HTML언어', 'CSS언어' ]
console.log(Langs); // [ 'JS', 'HTML', 'CSS' ]


const foods = ['Chicken', 3,  'Pizza', 2,  'Cheeseburger', 7];

const newfoods =  foods.filter(function(food){
    if (typeof food === 'string') {
        return food
    }
})

console.log(newfoods); // [ 'Chicken', 'Pizza', 'Cheeseburger' ]

const number_of_order = foods.filter(function(number){
    if (typeof number === 'number') {
        return number
    }
}) 

console.log(number_of_order); // [ 3, 2, 7 ]


function sumTotal(...numbers) {
    let temp = 0;

    for (let i = 0; i < numbers.length; i++) {
        temp += numbers[i];
    }

    return numbers.reduce(function(total, current) {
        return total + current
    }, 0)

}

console.log(sumTotal(1, 2, 3, 4, 5, 6, 7)); // 28