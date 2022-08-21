/**
 * 배열 순회
 */

const arr = [1, 2, 3];

console.log(arr[0]); //  1
console.log(arr[1]); //  2
console.log(arr[2]); //  3

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}  // 1 2 3

let j = 0;

while (j < arr.length) {
    console.log(arr[j])

    j += 1;
}  // 1 2 3

for (const value of arr) {
    console.log(value);
}  // 1 2 3

for (const index in arr) {
    console.log(arr[index]); 
}  // 1 2 3