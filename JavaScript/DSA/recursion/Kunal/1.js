const findFib = (n) => {
  if (n < 2) {
    return n;
  }
  return findFib(n - 1) + findFib(n - 2);
};

console.log(findFib(6));
