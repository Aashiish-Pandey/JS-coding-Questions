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

  let op1 = "";
  let op2 = "";

  if (close > open && open !== 0) {
    op1 = op + "(";

    op2 = op + ")";

    open = open - 1;
    close = close - 1;

    solve(open, close, op1);
    solve(open, close, op2);
  }
  if (close === open && close !== 0) {
    op1 = op + "(";
    open = open - 1;
    solve(open, close, op1);
  }

  if (open === 0 && close !== 0) {
    op1 = op + "(";
    close = close - 1;
    solve(open, close, op1);
  }
}

balncParen(3);
console.log(myArray);
