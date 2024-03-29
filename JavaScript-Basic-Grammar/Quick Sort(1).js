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


let mergeSort = function (arr, compare) {
    if (arr.length === 1) return arr;

    let m = (arr.length  / 2).toFixed(0);
    let left = mergeSort(arr.slice(0, m), compare);
    let right = mergeSort(arr.slice(m), compare);

    let i = 0,
      j = 0,
      k = 0;
    
    while (i < left.length && j < right.length) {
        arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
    }

    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];

    return arr;
};

let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
    let start = s;
    let pivot = arr[e];

    for (let i = s; i <= e; i++) {
        if (compare(pivot, arr[i])) {
            swap(arr, start, i);
            start++;
        }
    }
    swap(arr, start, e);

    if (start - 1 > s) {
        quickSort(arr, compare, s, start - 1);
    }
    if (start + 1 < e) {
        quickSort(arr, compare, start + 1, e);
    }
} 

let init_array  = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [quickSort];
let order = [ascending, descending];

for (let i = 0; i < sorting.length; i++) {
    for (let j = 0; j < order.length; j++) {
        console.log(sorting[i].name, order[j].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array); 
    }
}