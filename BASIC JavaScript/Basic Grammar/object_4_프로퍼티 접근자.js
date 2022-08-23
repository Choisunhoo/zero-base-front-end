/**
 * 프로퍼티 접근자(getter, setter)
 */

const meal_for_today = {
    main: 'chicken',
    sub: 'corn-salad',
    beverage: 'zero-coke',


    get main_dish() {
        return this.main.toUpperCase();
    }, 

    set main_dish(new_dish) {
        if (typeof new_dish !== 'string') {
            this.main = 'undefined name';

            return;
        }
        this.main = new_dish;
    },

    get meal_plan() {
        return (this.main + this.sub + this.beverage + '입니다.');
    },
};

meal_for_today.main_dish = 'ramen'
console.log(meal_for_today.main_dish); //RAMEN

console.log(meal_for_today.meal_plan); // ramencorn-saladzero-coke입니다.