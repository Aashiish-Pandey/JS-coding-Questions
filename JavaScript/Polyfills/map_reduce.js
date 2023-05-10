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