const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.reducePolyfill) {
  Array.prototype.reducePolyfill = function (callback, initialValue) {
    const arr = this;

    if (typeof callback !== "function") {
      throw new Error(callback + "is not a function");
    }

    let accumulator = initialValue;

    let startIndex = 0;

    if (accumulator === undefined) {
      if (arr.length === 0) {
        throw new Error("reduce of empty array with no initial value");
      }

      accumulator = arr[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        // we can omit this condition but its good to havethis, check the chatgpt for the explantaion
      if (Object.prototype.hasOwnProperty.call(this, i)) { 
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }
    return accumulator;
  };
}

const sum = arr.reducePolyfill((acc, cv) => acc + cv, 0);

console.log(sum);
