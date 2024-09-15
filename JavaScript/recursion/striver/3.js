// print 1 to n using backtracking

const printNum = (i, n) => {
  if (i === 0) return;

  print(i - 1, n);
  console.log(i);
};

function print(n) {
  printNum(n, n);
}

console.log(print(10));
