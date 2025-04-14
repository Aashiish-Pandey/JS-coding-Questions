// Promise Any

const dummyTask = (time, status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve(time);
      } else {
        reject(time);
      }
    }, time);
  });
};

const allTasks = [
  dummyTask(100, 0),
  dummyTask(3000, 0),
  dummyTask(4000, 0),
  dummyTask(2000, 0),
  //   100
];

// Promise.any(allTasks)
//   .then((res) => console.log("resolved", res))
//   .catch((err) => console.log("rejected", err));

Promise.anyPolyfill = function (promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray) || promiseArray.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    let rejectedCount = 0;
    let errors = [];

    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise) // Ensures non-promises are handled
        .then(resolve) // Resolve as soon as the first promise succeeds
        .catch((err) => {
          errors[index] = err; // Store error at the correct index
          rejectedCount++;

          if (rejectedCount === promiseArray.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

Promise.anyPolyfill(allTasks)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
