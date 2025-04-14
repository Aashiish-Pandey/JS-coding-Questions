// https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=2


// map() polyfill

const arr = [1, 2, 3, 4, 5];

// function findDouble()

Array.prototype.mapPolyfill = function (cb) {
  let answer = [];
  let inArr=this
  for(let i=0;i<inArr.length;i++) {
    answer.push(cb(inArr[i],i,inArr))

  }
  return answer
};

const double = arr.mapPolyfill((num, index, array) => {
  return num * 2;
});

console.log(double);



// Improved map polyfill

const num = [2, 3, 4, 5, 6];

if (!Array.prototype.mapPolyfill) {
  Array.prototype.mapPolyfill = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Cannot read property 'mapPolyfill' of null or undefined");
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        result.push(callback.call(thisArg, this[i], i, this));
      }
    }
    return result;
  };
}

const doubled= num.mapPolyfill((num, i, arr) => {
  console.log(arr, i);
  return num * 2;
});

console.log(doubled);
