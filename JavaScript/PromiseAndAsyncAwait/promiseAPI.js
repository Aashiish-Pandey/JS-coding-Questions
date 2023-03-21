// https://javascript.info/promise-api

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

//😎😎😎😎 Promise.allSettled() 😎😎😎😎
// Promise.allSettled([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 4000)),
//   ]).then((response) => console.log(response)).catch((res)=>console.log(res))

// 😎😎😎😎 Suppose if I want to get only resolved promises or only rejectedPromise :

// Promise.allSettled([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 4000)),
// ]).then((response) => {
//   let resolovedPromise = response.filter((item) => item.status == "fulfilled");
//   let rejectedPromise = response.filter((item) => item.status == "rejected");

//   console.log(resolovedPromise);
//   console.log(rejectedPromise);
// });

//😎😎😎😎 Promise.race() 😎😎😎😎

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),

//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(4), 4000)),
// ])
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res));

//😎😎😎😎 Promise.any() 😎😎😎😎

// Promise.any(
//   [new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(5), 5000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(4), 4000))]
// ).then((res)=>console.log(res)).catch((res)=>console.log(res))

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(3), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(5), 5000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(4), 4000)),
// ]).catch((res) => {
//   console.log(res);
//   console.log(res.errors[0]);
//   console.log(res.errors[1]);
//   console.log(res.errors[2]);
//   console.log(res.errors[3]);
// });
