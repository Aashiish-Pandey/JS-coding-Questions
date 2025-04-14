// https://www.youtube.com/watch?v=wXZyuJqNk9U
// Reverse a string

// function revString(str) {
//   let answer = "";
//   if (str.length === 1) {
//     return str[0];
//   }

//   let temp = str[str.length - 1];
//   let newStr = str.slice((0, str.length - 1));
//   return temp + revString(newStr);
// }

// console.log(revString("ashish"));

// power of a number

// function power(num,pow) {
//     if(pow===0){
//         return 1
//     }
//     return num*power(num,pow-1)
// }

// console.log(power(3,2))

// Merge Sort

let arr = [3, 5, 2, 1, 100, 6];

function mergeSort(arr) {
  let start = 0;
  let end = 6

  solve(arr, start, end);
}

function solve(arr, start, end) {
  if (end < start) {
    return;
  } else {
    {
      let mid = Math.floor[(start + end) / 2];
      //sort left subarray
      let leftArray = arr.slice(start, mid);
      solve(leftArray, start, mid);
      // sort Right subarray
      let rightArray = arr.slice(mid);
      solve(rightArray, mid + 1, rightArray - 1);
    }
    mergeSortedArray(leftArray, rightArray);
  }
  
}

function mergeSortedArray(leftArray, rightArray) {
  let sortedArray = [];
  let l1 = leftArray.length;
  let l2 = rightArray.length;
  let i = 0;
  let j = 0;

  while (i < l1 && j < l2) {
    if (leftArray[i] <= rightArray[j]) {
      sortedArray.push(leftArray[i]);
      i++;
    } else if (rightArray[i] <= leftArray[j]) {
      sortedArray.push(rightArray[j]);
      j++;
    }
  }
  if (i === l1) {
    return sortedArray.concat(rightArray.slice[j]);
  } else if (j === l2) {
    return sortedArray.concat(leftArray.slice[i]);
  }
  
}

console.log(mergeSort(arr));