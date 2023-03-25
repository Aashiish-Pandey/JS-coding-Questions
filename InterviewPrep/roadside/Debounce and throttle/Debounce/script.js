// https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10
// https://roadsidecoder.hashnode.dev/
// https://lodash.com/docs/4.17.15#debounce

// Ques:  create a button UI  and add  debounce as follows =>

//         -->  show "Button Pressed <x> Times " every time button is pressed
//         -->  Increase "Triggred <Y> times" count after  800ms of debounce

// 😎😎😎😎😎😎😎 Approch1 : using lodash library for debounceing

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment-pressed");
// const count = document.querySelector(".increment-count");

// let pressedCount = 0;
// let triggredcount = 0;

// const debounceCount = _.debounce(() => {
//   count.innerHTML = ++triggredcount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount()
// });

// // 😎😎😎😎😎😎😎 Approch2 : creating debounce polyfill

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

let pressedCount = 0;
let triggredcount = 0;

function debouncePollyfill(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}

const countDebounce = debouncePollyfill(() => {
  count.innerHTML = ++triggredcount;
}, 600);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  countDebounce();
});
