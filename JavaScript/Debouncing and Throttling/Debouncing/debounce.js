
// 😍😎😋😋😍😎😋😋😍😎😋😋😍😎😋😋😍😎😋😋😍😎😋😋
// https://www.youtube.com/watch?v=Zo-6_qx8uxg 
// https://www.youtube.com/watch?v=kCfTEoeQvQw

// How multiple calls get cancelled
// let timer = 0;
// function test() {
//   clearTimeout(timer);
//   timer = setTimeout(() => console.log("Hello"), 2000);
// }
// test();
// test();
// test();
// test();

// 😍😎😋😋  Debouncing By Akshay Saini  😍😎😋😋

function getData() {
  console.log("fetching data");
}

function debounce(func, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}

let beterfunction = debounce(getData, 2000);
