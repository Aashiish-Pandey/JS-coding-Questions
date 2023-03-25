// https://roadsidecoder.hashnode.dev/javascript-interview-questions-promises-and-its-polyfills
// https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=8

// let executor = (resolve,reject)=>{
//     setTimeout(()=>resolve(1000),1000)
// }
function PromisePolyFill(executor){

    let onResolve // this will store the callback passed to then and catch function

    this.then = function(callback) {
        onResolve= callback
        return this
    }

    this.catch = function(callback) {

        return this
    }
    function resolve(val) {
        onResolve(val);
      }

      executor(resolve);

}

new PromisePolyFill((resolve) => setTimeout(() => resolve(1000), 1000)).then(val => console.log(val));











// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved");
//   }, 2000);
// });

// p1.then((res) => console.log(res)).catch((error) => console.log(error));
