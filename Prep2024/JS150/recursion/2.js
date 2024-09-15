// Que1 : Permutation with spaces
// https://practice.geeksforgeeks.org/problems/permutation-with-spaces3627/1

const findPermutaion = (ip) => {
  let op = ip[0];
  ip =ip.slice(1);

  solve(op, ip);
};

const solve = (op, ip) => {
  if (ip === "") {
    console.log(op);
    return;
  }
  let op1 = op;
  let op2 = op;

  op1=op+ ip[0];
  op2 =op+' '+ ip[0];

  ip = ip.slice(1);

  solve(op1, ip) + solve(op2, ip)
};

console.log(findPermutaion("abc"))
