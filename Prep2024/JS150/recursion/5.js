// https://www.interviewbit.com/problems/generate-all-parentheses-ii/
let ans = [];
function genPerenthesis(len) {
  let op = "";
  let open = len;
  let close = len;
  solve(op, open, close);
  return ans;
}

function solve(op, open, close) {
  if (open === 0 && close === 0) {
    ans.push(op);
    return;
  }

  if (open !== 0) {
    
    let op1 = op + "(";
    // open =open-1
    solve(op1, open-1, close);
  }

  if (open < close) {
    // let op2 = op;
    let op2 = op + ")";
    // close=close-1
    solve(op2, open, close-1);
  }
}
console.log(genPerenthesis(3));
