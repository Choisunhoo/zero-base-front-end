/*
    딕셔너리 (Dictionary)
    - key-value 형태로 다양한 자료형 개체 (Entity)를 저장하는 자료구조 (Map)
    - 구현 메서드 (method) 
        - 전체 개체 획득 / 초기화 / 크기 반환 : Dictionary.getBuffer(), Dictionary.clear(), Dictionary.size()
        - 개체 추가 / 삭제 / 반환 / 여부: Dictionary.set(), Dictionary.remove(), Dictionary.get(), Dictionary.has()
        - key, value 배열 반환 / 고차 함수: Dictionary.keys(), Dictionary.values(), Dictionary.each()
*/

// 딕셔너리 구현 (1)

// Dictionary(): 개체(Entity)를 저장할 생성자 
function Dictionary(items = {}) {
    this.items = items;
}

// getBuffer(): 모든 개체 (Entity) 반환
Dictionary.prototype.getBuffer = function() {
    return {...this.items };
};

// clear(): 초기화
Dictionary.prototype.clear = function() {
    this.items = {};
};

// size(): 크기 반환 
Dictionary.prototype.size = function () {
    return Object.keys(this.items).length;
};

// 딕셔너리 구현 (2)

// has(): 개체 존재 여부 확인 (key 정보를 배열로 반환)
Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
};

// set(): 개체 (Entity) 추가 
Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
};

// get(): 개체(Entity)의 value 반환 
Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
};

// remove(): 개체 (Entity) 삭제
Dictionary.prototype.remove = function (key) {
    if (this.has(key)) {
        delete this.items[key];
        return true;
    }
    return false;
};


let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict); // Dictionary { items: { age: 19, name: 'alice', height: 172 } }

console.log(dict.has("age")); // true
console.log(dict.has("name")); // true
console.log(dict.get("age")); // 19
console.log(dict.get("name")); // alice
