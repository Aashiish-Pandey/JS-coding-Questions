function findBinary(n) {
  let one = 0;
  let zero = 0;
  let op = "";

  solve(one, zero, n, op);
}

function solve(one, zero, n, op) {
  if (n === 0) {
    console.log(op);
    return;
  }

  let op1 = op;
  let op2 = op;

  op1 = op + "1";
  solve(one + 1, zero, n - 1, op1);
  if (one > zero) {
    op2 = op + "0";

    solve(one, zero + 1, n - 1, op2);
  }
}

findBinary(3);
