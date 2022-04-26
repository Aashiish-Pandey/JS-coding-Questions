// let p = new Promise(function (resolve, reject) {
//   let a = 2;

//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("not Success");
//   }
// });

// p.then((mssg) => {
//   console.log("hello", mssg);
// }).catch((mssg) => {
//   console.log("Hello", mssg);
// });

//😎😎😎😎 Promise.all() 😎😎😎😎

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 4000)),
// ]).then((response) => console.log(response))

// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 4000)),
//   ]).then((response) => console.log(response)).catch((res)=>console.log(res))


//😎😎😎😎 Promise.race() 😎😎😎😎



Promise.race([

    new Promise((resolve,reject)=> setTimeout(()=>resolve(3),3000)),

    new Promise((resolve,reject)=>setTimeout(()=>reject(2),2000))
]).then


