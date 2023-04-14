let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(8);
let p4 = Promise.reject("Rejected")

// // Promise.all([p1, p2, p3, p4])
// //   .then((result) => console.log(result))
// //   .catch((ex) => console.log(ex));

// let promiseAll = (promises) => {
//   return new Promise((resolve, reject) => {
//     const response = [];
//     let excep;
//     for (let promise of promises) {
//       promise
//         .then((res) => response.push(res))
//         .catch((err) => {
//           excep = err;
//         });
//       if (excep) {
//         console.log(excep)
//         break;
//       }
//     }
//     if (excep) {
//         console.log(excep)
//       reject(excep);
//     } else {
//         console.log(response)
//       resolve(response);
//     }
//   });
// };

// promiseAll([p4])
//   .then((res) => console.log(res))
//   .catch((excep) => console.log(excep));

function promiseAll (promiseList){
  return new Promise((resolve, reject) => {
    let respnsArray = [];

    promiseList.forEach((promise, index) => {
      try {
        promise.then((res) => respnsArray.push(res));
        if (index + 1 === promiseList.length) {
          resolve(respnsArray);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
};

promiseAll([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((excep) => console.log(excep));
