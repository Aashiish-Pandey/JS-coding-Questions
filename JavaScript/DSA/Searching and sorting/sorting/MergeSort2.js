// https://takeuforward.org/data-structure/merge-sort-algorithm/


const arr = [8, 3, 4, 12, 5, 6];

const mergeSortedArray = (arr, start, mid, end) => {
    let i = start;
    let j = mid + 1;
    
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            i++;
        } else {
            let temp = arr[j];
            let index = j;

            while (index > i) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[i] = temp;

            i++;
            mid++;
            j++;
        }
    }
};

const sortedArray = (arr, start, end) => {
    if (start >= end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);

    sortedArray(arr, start, mid);
    sortedArray(arr, mid + 1, end);

    mergeSortedArray(arr, start, mid, end);
};

const mergeSort = (arr) => {
    sortedArray(arr, 0, arr.length - 1);
    return arr;
};

console.log("Array before sorting:", arr);
console.log("Sorted array:", mergeSort(arr));
console.log("Array after sorting:", arr);
