/**
 * Async function & Await
 */


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
    .then((res) => console.log(res)) // Here is a cup of Americano
    .catch((rej) => console.log(rej))
    .finally(() => console.log('감사합니다.')); // 감사합니다.


async function americano(Drink) {
    try {
        const result = await cafe(Drink);

        return result;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('감사합니다');
    }
}

console.log(americano('Americano'));