// array is sorted or not

const arr = [1, 2, 3, 6, 8, 9];

const helper = (arr, start) => {
  if (start === arr.length - 1) {
    return true
  }

// return arr[start]<arr[start+1] &&  helper(arr,start+1)

if(arr[start]>arr[start+1]) {
    return false
} else {
    return helper(arr,start+1)
}
};

const checkArray = (arr) => {


  const isSorted = helper(arr, 0);
  return isSorted;
};

console.log(checkArray(arr));
