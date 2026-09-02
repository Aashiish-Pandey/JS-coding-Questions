// Execute Promises with Priority

const dummyAPI = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time);
  });
};

// Promise.allSettled([dummyAPI(1000), dummyAPI(2000), dummyAPI(3000), Promise.reject('rejected1'), Promise.reject('rejected2')])
// .then(res => console.log(res)).catch(error => console.log(error))

if (!Promise.allSettledPolyfill) {
  Promise.allSettledPolyfill = function (promiseArray) {
    let result = [];
    let promiseCount = 0;

    return new Promise((resolve, reject) => {
      promiseArray.forEach((promise) => {
        Promise.resolve(promise)
          .then((res) =>
            result.push({
              status: "FullFilled",
              result: res,
            })
          )
          .catch((err) =>
            result.push({
              status: "Rejectedkjasf",
              reason: err,
            })
          )
          .finally(() => {
            promiseCount++;
            if (promiseCount === promiseArray.length) {
              resolve(result);
            }
          });
      });
    });
  };
}

Promise.allSettledPolyfill([
  dummyAPI(1000),
  dummyAPI(2000),
  dummyAPI(3000),
  Promise.reject("rejected1"),
  Promise.reject("rejected2"),
])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
