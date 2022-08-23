/**
 * 프로퍼티 조작
 */

const food = {
    main: 'chicken',
    dessert: 'iceream',

};

// 추가 
food.beverage = 'zero-coke'
//  food['beverage'] = 'zero-coke'
console.log(food); // { main: 'chicken', dessert: 'iceream', beverage: 'zero-coke' }

// 수정
food.beverage = 'pepsi-zero'
console.log(food); // { main: 'chicken', dessert: 'iceream', beverage: 'pepsi-zero' }

// 삭제
delete food.dessert;
console.log(food); // { main: 'chicken', beverage: 'pepsi-zero' }
