// 딕셔너리, 해시테이블 문제풀이 - 숫자 카드

const HASH_SIZE = 21;
function HashTable() {
    this.table = new Array(HASH_SIZE);
}

HashTable.prototype.hashCode = function (key) {
    return (key + 10) % HASH_SIZE;
};

HashTable.prototype.put = function (key) {
    let index = this.hashCode(key);
    if (this.table[index] === undefined) {
        this.table[index] = 0;
    }

    this.table[index]++;
};

HashTable.prototype.get = function (key) {
    let index = this.hashCode(key);
    return this.table[index] === undefined ? 0 : this.table[index];
};

function answer(card, select) {
    let result = [];

    let ht = new HashTable();
    // 1. card 내 있는 숫자 카드가 몇개인지를 count
    for (let i = 0; i < card.length; i++) {
        // 카드 숫자 별 count 
        ht.put(card[i]); 
    }

    // 2. select 내 있는 숫자 카드가 1번의 count 한 배열에서 몇개 있는지 확인 
    for (let i = 0; i < select.length; i++) {
        // 1번에서 구한 숫자카드가 있는 경우, 그 카드의 개수를 넣어주고, 없는 경우는 0
        result.push(ht.get(select[i]));
    }

    return result;
}


let input = [
    [
        [-6, -1, 6, 1, 1],
        [-2, 1, 3],
    ],
    [
        [7, 4, 3, 10, 10, 10, -10, -10, 7, 3],
        [10, 9, -5, 4, 6, -10],
    ],
    [
        [5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1],
        [4, 5, 1, 10, -2, -3, 3, -8],
    ],
];


for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
}