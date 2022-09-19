// es-module-export

export function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
        return this.name + '입니다';
    };
}



