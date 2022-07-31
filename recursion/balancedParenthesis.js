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
  } else {
    if (open < close && open !== 0) {
      let op1 = op + ")";
      let op2 = op + "(";

      solve(open, close - 1, op1);
      solve(open--, close, op2);
    } else if (open < close && open === 0) {
      let op2 = op + ")";

      solve(open, close--, op2);
    } else if (open === close && close !== 0) {
      let op1 = "(";
      solve(open--, close, op1);
    }
  }
}

balncParen(2);
console.log(myArray);
