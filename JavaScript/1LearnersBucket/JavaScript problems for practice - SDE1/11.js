const quest = {
  //     Implement an Array iterator method
  // Success rate: 17.65%
  // Create an iterator method that accepts an array and returns a new method, that will return the next array value on each invocation.
  // Example
  // const iterator = helper([1, 2, "hello"]);
  // console.log(iterator.next()); // 1
  // console.log(iterator.next()); // 2
  // console.log(iterator.done()); // false
  // console.log(iterator.next()); // "hello"
  // console.log(iterator.done()); // true
  // console.log(iterator.next()); // "null
};

const helper = (inArr) => {
  let count = 0;

  return {
    next() {
      if (count >= inArr.length) {
        return null;
      } else {
        return inArr[count++];
      }
    },
    done() {
      return count >= inArr.length;
    },
  };
};

const iterator = helper([1, 2, "hello"]);
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null
