// febonacii series

// 0 ,1,1,2,3,5,8

const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
