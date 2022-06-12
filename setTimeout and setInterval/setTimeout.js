// https://javascript.info/settimeout-setinterval
//https://www.youtube.com/watch?v=yGU9DJ5TI8I

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// let timer = setTimeout(sayHello,1000,"Ashish");
// console.log(timer);
// clearTimeout(timer);
// console.log(timer);

// Nested setTimeout

let timerId = setTimeout(function tick() {
    console.log("Hello")
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);

setTimeout(()=>clearTimeout(timerId),5000)

