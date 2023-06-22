function curry(cb) {
  return function (a) {
    return function (b) {
      return cb(a, b);
    };
  };
}


function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2));
console.log(curriedSum(1,2))