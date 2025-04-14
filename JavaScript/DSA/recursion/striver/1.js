// print name n times using recursion

const printName = (i, n) => {
  if (i > n) return;
  console.log("Ashish");
  printName(i + 1, n);
};

function print() {
  let i = 1;
  let n = 4;

  printName(i, n);
}

console.log(print(4));
