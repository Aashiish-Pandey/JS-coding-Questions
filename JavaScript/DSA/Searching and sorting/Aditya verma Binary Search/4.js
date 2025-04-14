// Ceil of an element in a Sorted Array
// https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/

let arr = [1, 2, 8, 10, 10, 12, 19];
let x = 5;

const findCeil = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let mid 
  let ans = -1;

  while(end>=start) {
    mid= Math.floor((start+end)/2)
    if(arr[mid]>=x) {
        ans =arr[mid]
        end=mid-1
    } else {
        start=mid+1
    }
  }

  return ans

};

console.log(findCeil(arr, 20));
