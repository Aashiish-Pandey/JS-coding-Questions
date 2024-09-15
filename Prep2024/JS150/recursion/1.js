// https://www.geeksforgeeks.org/permute-string-changing-case/
let ans = [];
function solve(op, ip) {


  if (ip === "") {
    ans.push(op)
    return;
  }

  let op1 = op;
  let op2 = op;
  op1 += ip[0].toLowerCase();
  op2 += ip[0].toUpperCase();
  ip = ip.slice(1);
  solve(op1, ip);
  solve(op2, ip);
}

function letterPermutation(str) {
  let ip = str;

  let op = "";

 solve(op, ip);
  return ans
}

console.log(letterPermutation("ab"));
