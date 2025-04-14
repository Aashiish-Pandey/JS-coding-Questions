const dummyTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 500000) {
        reject(time);
      }
      resolve(time);
    }, time);
  });
};

const tasks = [
  dummyTask(1000),
  dummyTask(3000),
  dummyTask(2000),
  dummyTask(500),
  100
];

Promise.allPolyfill = function (promiseArray) {
  if (!promiseArray.length) {
    return Promise.resolve([]);
  }
  let response = [];
  let resolveCount = 0;

  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
          response[index] = res;
          resolveCount++;
          if (resolveCount === promiseArray.length) {
            resolve(response); 
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// Promise.allPolyfill(tasks)
//   .then((res) => console.log("resolved with", res))
//   .catch((err) => console.log("rejected with", err));

Promise.all(tasks)
  .then((res) => console.log("resolved with", res))
  .catch((err) => console.log("rejected with", err));

