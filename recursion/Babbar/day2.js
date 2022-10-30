// qu1:

function reachHome(src, dest) {
  if (src === dest) {
    console.log("Reached home");
    return;
  }
  src++;
  reachHome(src, dest);
}

reachHome(1, 10);

// Que2: febonaci series: 0,1,1,2,3,5,8,13,21

function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(8));

// que3:

let numObj = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

let num = 567;

function printNum(num) {
  if (num === 0) {
    return;
  }

  let digit = num % 10;
  num = Math.floor(num / 10);

  printNum(num);
  console.log(numObj[digit]);
}

printNum(num);
