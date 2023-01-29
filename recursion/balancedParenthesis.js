// https://www.interviewbit.com/problems/generate-all-parentheses-ii/

let myArray = [];

function balncParen(ip) {
  let open = ip;
  let close = ip;
  let op = "";
  solve(op, open, close);
  return myArray;
}

function solve(op, open, close) {
  if (open === 0 && close === 0) {
    myArray.push(op);
    return;
  } else {
    if (open !== 0) {
      let op1 = op + "(";
      solve(op1, open - 1, close);
    } if(open<close) {
      let op2 = op + ")";
      solve(op2, open, close - 1);
    }
  }
}

// function solve(open, close, op) {
//   if (open === 0 && close === 0) {
//     myArray.push(op);
//     return;
//   } else {
//     if (open < close && open !== 0) {
//       let op1 = op + ")";
//       let op2 = op + "(";

//       solve(open, close - 1, op1);
//       solve(open--, close, op2);
//     } else if (open < close && open === 0) {
//       let op2 = op + ")";

//       solve(open, close--, op2);
//     } else if (open === close && close !== 0) {
//       let op1 = op+"(";
//       solve(open--, close, op1);
//     }
//   }
// }

console.log(balncParen(3));
