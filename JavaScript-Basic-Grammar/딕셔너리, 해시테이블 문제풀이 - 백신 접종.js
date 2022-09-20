// 딕셔너리, 해시테이블 문제풀이 - 백신 접종

function Element(key, value) {
    this.key = key;
    this.value = value;
}

function HashTable(size) {
    this.size = size;
    this.table = new Array(this.size);
    this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % this.size;
};

HashTable.prototype.put = function (key) {
    let index = this.hashCode(key);
    if (this.table[index] === undefined) {
        this.table[index] = new Element(key, index + 1);
        this.length++;
        return true;
    }
};

HashTable.prototype.get = function (key) {
    let index = this.hashCode(key);

};

function answer(name) {
    let result = [];

    let ht = new HashTable(name.length);

    
    return result;
}


let input = [
    ["Mana", "Naomi", "Lelia", "Morris", "Madonna"],
    ["Oliver", "Mabel", "Nero", "Rei", "Kara", "Jordan", "Nami"],
    ["Ruby", "Robin", "Jordan", "Kori", "Rei", "Madonna", "Justin", "Maya", "Lakia", "Kali"],
];


for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}