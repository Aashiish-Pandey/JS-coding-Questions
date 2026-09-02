const dummyAPI = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time);
  });
};

// Promise.allSettled([dummyAPI(1000), dummyAPI(2000), dummyAPI(3000), Promise.reject('rejected1'), Promise.reject('rejected2')])
// .then(res => console.log(res)).catch(error => console.log(error))



if (!Promise.allSettledPolyfill) {
  Promise.allSettledPolyfill = function (promiseArray) {
    return new Promise((resolve) => {
      const results = [];
      let completed = 0;

      promiseArray.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = { status: "fulfilled", value };
          })
          .catch((reason) => {
            results[index] = { status: "rejected", reason };
          })
          .finally(() => {
            completed++;
            if (completed === promiseArray.length) {
              resolve(results);
            }
          });
      });
    });
  };
}

