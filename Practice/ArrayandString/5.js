// Program to sort only positive numbers of the array
//https://www.geeksforgeeks.org/sort-an-array-without-changing-position-of-negative-numbers/

let arr = [2, -6, -3, 8, 4, 1];

let tempArr = arr.filter((item) => item > 0);
tempArr.sort((a, b) => a - b);

let i = 0;
let j = 0;
while (i < arr.length) {
  if (0 < arr[i]) {
    arr.splice(i, 1, tempArr[j]);
    j++;
  }
  i++;
}

console.log(arr);
