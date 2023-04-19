// Write the polyfill for "_.once" method in lodash. **
function once(func, context) {
    let ran;
    return function () {
      if (func) {
        ran = func.apply(context || this, arguments);
        func = null;
      }
  
      return ran;
    };
  }
  
  // Usage
  const hello = once(() => console.log("hello"));
  
  hello();
  hello();
  