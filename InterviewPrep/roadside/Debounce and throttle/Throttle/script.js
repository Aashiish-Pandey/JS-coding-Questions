// https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10
// https://roadsidecoder.hashnode.dev/
// https://lodash.com/docs/4.17.15#debounce

// Ques:  create a button UI  and add  throttle as follows =>

//         -->  show "Button Pressed <x> Times " every time button is pressed
//         -->  Increase "Triggred <Y> times" count after  800ms of throttle

// 😎😎😎😎😎😎😎 Approch1 : using lodash library for throttling

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment-pressed");
// const count = document.querySelector(".increment-count");

// let pressedCount = 0;
// let triggredcount = 0;

// const debounceCount = _.throttle(() => {
//   count.innerHTML = ++triggredcount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount()
// });

// 😎😎😎😎😎😎😎 Approch2 : using throttle polyfill

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

const throttlePolyfill = (func, delay) => {
  let flag = true;
  return function () {
    if (flag) {
      func.apply(this);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const countThrottle = throttlePolyfill(() => {
  count.innerHTML = ++triggredcount;
}, 2000);

let pressedCount = 0;
let triggredcount = 0;

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  countThrottle();
});
