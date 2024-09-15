// https://www.geeksforgeeks.org/recursive-program-to-generate-power-set/


let ans ={}
function genPset(ip) {
  let op = "";
  solve(op, ip);
  return Object.keys(ans)
}

function solve(op, ip) {
  if (ip === "") {
    ans[op]=op
    return;
  }

  let op1 = op;
  let op2 = op;
  op2 = op + ip[0];
  ip = ip.slice(1);

  solve(op1, ip);
  solve(op2, ip);
}

console.log(genPset("aabc"));
