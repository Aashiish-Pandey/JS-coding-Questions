// 5: Flattning a nested array

const arr2 = [0, 1, [2, [3, [4, 5]]]];

const flatArray = (arr) => {
  const ans = [];
  while (arr.length) {
    let item = arr.shift();
    if (Array.isArray(item)) {
      arr.unshift(...item);
    } else {
      ans.unshift(item);
    }
  }
  return ans.reverse();
};

console.log(flatArray(arr2));
