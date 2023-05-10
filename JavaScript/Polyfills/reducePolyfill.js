// https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=2

let arr = [1, 2, 3, 4, 5, 6];

// const sum = arr.reduce((acc, cv, index, array) => {
//   return acc + cv;
// }, 0);


Array.prototype.reducePolyfill= function(cb,intialVale) {
    let inArr= this
    let accumulator = intialVale
    for(let i=0;i<inArr.length;i++) {
         accumulator = accumulator? cb(accumulator,inArr[i],i,inArr):inArr[i]
    }
    return accumulator

}

const sum = arr.reducePolyfill((acc, cv, index, array) => {
  return acc + cv;
}, 0);

console.log(sum);
