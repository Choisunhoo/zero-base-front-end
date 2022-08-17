/** 
원시 값 (primitive value)
 */

let var_1 = undefined; 
console.log(typeof var_1); // output: undefined
let var_2 = true; 
console.log(typeof var_2); // output: boolean
let var_3 = 'string'; 
console.log(typeof var_3); // output: string
let var_4 = 123; 
console.log(typeof var_4); // output: number
let var_5 = 9007199254740992n; 
console.log(typeof var_5); // output: bigint
let var_6 = Symbol(); 
console.log(typeof var_6); // output: symbol
let var_7 = null; 
console.log(typeof var_7); // output: object


let test = 'string'
console.log(test.toUpperCase(test)) // output: STRING 

console.log(test); // output: string 
test = test.toUpperCase();
console.log(test); // output: STRING

let bool = false; 
console.log(!bool); // output: true 
console.log(bool); // output: false

bool = !bool
console.log(bool); // output: true