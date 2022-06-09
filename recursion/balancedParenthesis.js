// https://www.interviewbit.com/problems/generate-all-parentheses-ii/

let myArray = [];

function balncParen(ip) {
  let open = ip;
  let close = ip;
  let op = "";
  solve(open, close, op);
}

function solve(open, close, op) {
  if (open === 0 && close === 0) {
    myArray.push(op);
    return;
  }

  if (close > open && open !== 0) {
    op1 = op + "(";

    op2 = op + ")";

    solve(open - 1, close, op1);
    solve(open, close - 1, op2);
  }

  if (close === open && close !== 0) {
    op1 = op + "(";

    solve(open - 1, close, op1);
  }

  if (open === 0 && close !== 0) {
    op1 = op + ")";

    solve(open, close - 1, op1);
  }
}

balncParen(2);
console.log(myArray);
