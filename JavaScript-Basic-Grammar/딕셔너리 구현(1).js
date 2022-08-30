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

