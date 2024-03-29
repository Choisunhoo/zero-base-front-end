import {
    LinkedList
} from "./linked list.mjs";


// 체이닝 해시테이블 

const HASH_SIZE = 37; 

// Element(): Key, value 저장을 위한 생성자
function Element(key, value) {
    this.key = key;
    this.value = value;
}

// ChainingHashTable(): 생성자 
function ChainingHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode(): 해시 함수 
ChainingHashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

// clear(): 초기화 
ChainingHashTable.prototype.clear = function () {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

// size(): 크기 반환 
ChainingHashTable.prototype.size = function () {
    return this.length;
};


// 체이닝 해시테이블 구현(2)

// put(): 데이터 추가 
ChainingHashTable.prototype.put = function (key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if (this.table[index] === undefined) {
        this.table[index] = new LinkedList();
    }

    this.table[index].append(new Element(key, value));
    this.length++;

    return true;
}


let cht = new ChainingHashTable();
cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);

console.log(cht);