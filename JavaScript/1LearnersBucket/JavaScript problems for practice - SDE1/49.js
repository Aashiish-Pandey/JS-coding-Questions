// Promise.race()

const dummyTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`resolved in ${time}`), time);
  });
};

const dummyTaskRejected = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`rejected in ${time}`), time);
  });
};

// Promise.race([
//   dummyTask(1000),
//   dummyTask(2000),
//   dummyTask(4000),
//   dummyTask(5000),
//   dummyTaskRejected(10000),
// ])
//   .then((res => console.log(res)))
//   .catch((error) => console.log(error));

if (!Promise.racePolyfill) {
  Promise.racePolyfill = function (promiseArray) {
    return new Promise((resolve, reject) => {
      promiseArray.forEach((promise) => {
        Promise.resolve(promise)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => reject(error));
      });
    });
  };
}

Promise.racePolyfill([
  dummyTask(1000),
  dummyTask(2000),
  dummyTask(4000),
  dummyTask(5000),
  dummyTaskRejected(100),
])
  .then((res => console.log(res)))
  .catch((error) => console.log(error));
