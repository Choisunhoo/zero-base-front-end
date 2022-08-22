/**
 * arguments
 */

function func() {
    return arguments
}

console.log(func()); // [Arguments] {}


const func_1 = function() {
    (Array.isArray(arguments))
    return arguments
}

console.log(func_1(1,2,3,4,5,6,7)); // [Arguments]  { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }


const func_2 = function() {
    const convertArr = Array.from(arguments)

    return convertArr.reduce((prev, curr) => prev + curr)
}

console.log(func_2(1,2,3,4,5,6,7)); // 28