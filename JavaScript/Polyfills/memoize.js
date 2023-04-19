// Write the polyfill for "_.memoize" method in lodash. **

function memoize(func) {
    let res = {};
  
    return function (...args) {
      const argsIndex = JSON.stringify(args);
      if (!res[argsIndex]) 
               res[argsIndex] = func(...args);
      return res[argsIndex];
    };
  }
  
  const clumsysquare = memoize((num) => {
    for (let i = 1; i <= 100000000; i++) {}
  
    return num * 2;
  });
  
  console.time("First call");
  console.log(clumsysquare(9467));
  console.timeEnd("First call");
  
  // use the same value two times
  console.time("Second call");
  console.log(clumsysquare(9467));
  console.timeEnd("Second call");
  