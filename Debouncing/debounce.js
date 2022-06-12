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
    clearInterval(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}

let beterfunction = debounce(getData, 2000);
