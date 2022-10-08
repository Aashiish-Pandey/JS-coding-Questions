// pollyfills for filter
let arr = [1, 3, 4, 2, 6, 8, 7];

function findEven(num) {
  if (num % 2 === 0) {
    return true;
  }
}

let evenNum = arr.filter(findEven);
console.log(evenNum);

Array.prototype.myFilter = function (func) {
  let filteredArray = [];

  let inArr = this;

  inArr.forEach((item) => {
    if (func(item)) {
      filteredArray.push(item);
    }
  });

  return filteredArray;
};

let myEvenNum = arr.myFilter(findEven);

console.log(myEvenNum);
