// Promise.race Polyfill

const dummyTask = function (delay, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

const allTasks = [
  dummyTask(3000, 1),
  dummyTask(2000, 0),
  dummyTask(2500, 1),
  dummyTask(1000, 0),
];

// Promise.race(allTasks)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

Promise.racePolyfill = (promiseArray) => {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.racePolyfill(allTasks)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
