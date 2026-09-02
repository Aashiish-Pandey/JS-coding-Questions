const question = {
  //    Memoize a function
  // Create a function in JavaScript that memoizes or caches the result for
  //  the given input so that the subsequent calls for the same inputs will be faster.
};

const heavyFunction = (...args) => {

    console.log('args is'  ,args)
  let sum = 0;
  let num =args[0]

  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum
};

const memoize = function (callback) {
  const cache = new Map();

  const getKey = (args) => {
    return `${args.join(" ")}}`;
  };

  return function (...args) {
    const key = getKey(args);
    console.log('Key is' ,key)
    console.log('cache is ' ,cache)
    if (cache.has(key)) {
        console.log('value has been returned from cache')
      return cache.get(key);
    } else {
      let value = callback(...args);
      cache.set(key ,value)
      return value
    }
  };
};

const memoizeFunction = memoize(heavyFunction)

console.log(memoizeFunction(10))
console.log(memoizeFunction(10))
console.log(memoizeFunction(10))
console.log(memoizeFunction(20))

