// without memoizing/Caching  the value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {}
  return num1 * num2;
};

console.time();
console.log(clumsySquare(2, 4));
console.timeEnd();

console.time();
console.log(clumsySquare(2, 4));
console.timeEnd();

// 😎😎😎😎😎😎😎 memoizing/Caching  the value

const myMemoize = (func) => {
  const cachedValue = {};

  return function (...param) {
    let args = param.join(",");
    console.log(args);
    if (cachedValue[args]) {
      return cachedValue[args];
    } else {
      let prod = func.apply(this, arguments);

      cachedValue[args] = prod;
      console.log(cachedValue);
      return prod;
    }
  };
};

improvedSquare = myMemoize(clumsySquare);
console.time();
console.log(improvedSquare(2, 4));
console.timeEnd();
console.time();
console.log(improvedSquare(2, 4));
console.timeEnd();
console.time();
console.log(improvedSquare(2, 4));
console.timeEnd();
console.time();
console.log(improvedSquare(20, 4));
console.timeEnd();
