let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(8);
let p4 = Promise.reject("Rejected")

function myPromiseAll(promiseList) {
  return new Promise((resolve, reject) => {
    let output = [];
    promiseList.forEach((promise, index) => {
      try {
        promise.then((data) => {
          output.push(data);
          if (index + 1 === promiseList.length) {
            resolve(output);
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  });
}

const output = myPromiseAll([p1,p2,p3]);
output.then((data) => {
  console.log(data);
}).catch(err=>console.log(err))

// Promise.all([promise1, promise2, promise3]).then(data => {
//   console.log(data);
// })
