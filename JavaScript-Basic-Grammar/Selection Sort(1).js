let swap = function (arr, idx_1, idx_2) {
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};


let ascending = function(x, y) {
    return x > y;
};

let descending = function(x, y) {
    return x < y;
};


let selectionSort = function (arr, compare) {
    for (let  i = 0; i < arr.length - 1; i++) {
        let k = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[k], arr[j])) k = j {
            }
        }
        swap(arr, i, k)
    }
};

let init_array  = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [selectionSort];
let order = [ascending, descending];

for (let i = 0; i < sorting.length; i++) {
    for (let j = 0; j < order.length; j++) {
        console.log(sorting[i].name, order[j].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array); 
    }
}