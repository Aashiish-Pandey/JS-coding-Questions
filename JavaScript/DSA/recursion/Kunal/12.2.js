const arr = [1, 2, 3, 3, 4, 7, 7, 3];
const target = 3;

const helper = (arr, target, start) => {
  if (start > arr.length - 1) {
    return[]
  }

  const list = [];
  if (arr[start] === target) {
    list.push(start);
  }
  const otherIndex = helper(arr, target, start + 1);
  if (otherIndex.length) {
    return [...list, ...otherIndex];
  } else {
    return list;
  }
};

const findAllIndex = (arr, target) => {
  const allIndex = helper(arr, target, 0);
  return allIndex;
};

console.log(findAllIndex(arr, target));
