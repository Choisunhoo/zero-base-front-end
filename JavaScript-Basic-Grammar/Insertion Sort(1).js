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


let insertionSort = function (arr, compare) {
    for (let  i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for (let j = i - 1; j >= 0; j--) {
            arr[j + 1] = arr[j];
            if (compare(tmp, arr[j]))   {
                break;
            }
        }
        arr[j + 1] = tmp;
    }
};

let init_array  = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [insertionSort];
let order = [ascending, descending];

for (let i = 0; i < sorting.length; i++) {
    for (let j = 0; j < order.length; j++) {
        console.log(sorting[i].name, order[j].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array); 
    }
}