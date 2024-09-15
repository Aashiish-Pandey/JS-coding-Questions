// Que3: Letter Case Permutation
//https://leetcode.com/problems/letter-case-permutation/

function lcPermutaion(ip) {
  let op = "";
  let ans =[]
  solve(op, ip, ans);
  return  ans
}

function solve(op, ip,ans) {
  if (ip === "") {
  
    ans.push[op]
    console.log(ans)
    return;
  }

  if (isNaN(ip[0])) {
    // console.log(ip[0])
    let op1 = op;
    let op2 = op;
    op1 = op + ip[0].toUpperCase();
    op2 = op + ip[0].toLowerCase();
    let newIp = ip.slice(1);

    solve(op1, newIp);
    solve(op2, newIp);
  } else {
    let op1 = op;
    op1 = op + ip[0];
    let newIp = ip.slice(1);
    solve(op1, newIp);
  }
}

console.log(lcPermutaion("a1b2"));
