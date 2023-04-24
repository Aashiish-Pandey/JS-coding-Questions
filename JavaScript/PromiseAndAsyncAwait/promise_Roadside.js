// https://roadsidecoder.hashnode.dev/javascript-interview-questions-promises-and-its-polyfills

// ex1:

// const first = new Promise((resolve, reject) => {
//   resolve("first");
// });

// const second = new Promise((resolve, reject) => {
//   resolve(first);
// });

// second.then((res) => res).then((x) => console.log(x));

// Exp2:  resolve promise recursevely 

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`sub to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the  ${video}`);
    }, 1000);
  });
}

function promRecurse(funcPromise) {
  if (funcPromise.length === 0) {
    return;
  }

  const currPromise = funcPromise.shift();
  currPromise.then((res) => console.log(res)).catch(error=>console.log(error))
  promRecurse(funcPromise)
}

promRecurse([
  importantAction("Road side"),
  likeTheVideo("js interview Quest"),
  shareTheVideo("js interview Quest"),
]);
