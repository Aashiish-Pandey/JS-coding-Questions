const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

const findPeak = (arr) => {
  if (arr.length === 1 || arr[0] > arr[1]) {
    return arr[0];
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }

  let low = 1;
  let high = arr.length - 2;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if(arr[mid]>arr[mid-1]&& arr[mid]>arr[mid+1]) {
        return mid
    } else if(arr[mid]<arr[low]) {
        high=mid-1
    } else {
        low=mid+1

    }
  }
};

console.log(findPeak(arr))
