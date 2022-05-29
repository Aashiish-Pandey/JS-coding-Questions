// Que1 : Permutation with spaces
// https://practice.geeksforgeeks.org/problems/permutation-with-spaces3627/1

// Que2 : Permutaion with case change
// https://www.geeksforgeeks.org/permute-string-changing-case/

// Que3: Letter Case Permutation
//https://leetcode.com/problems/letter-case-permutation/

// function perumation(ip) {
//   let op = ip[0];
//   let newIp = ip.substring(1);
//   solve(newIp, op);
//   return;
// }

// function solve(ip, op) {
//   if (ip === "") {
//     console.log(op);
//     return;
//   }

//   let op1 = op;
//   let op2 = op;
//   op1 = op + " " + ip[0];
//   op2 = op + ip[0];
//   let newIp = ip.substring(1);
//   solve(newIp, op1);
//   solve(newIp, op2);
// }

// perumation("abc");

// function permutationWCase(ip) {
//   let op = "";
//   solve(ip, op);
// }

// function solve(ip,op) {
//     if(ip===""){
//         console.log(op)
//         return
//     }
//     let op1= op
//     let op2 = op
//     op1= op+ip[0]
//     op2 = op+ip[0].toUpperCase()
//     let newIp = ip.substring(1)
//     solve(newIp,op1)
//     solve(newIp,op2)
// }

// permutationWCase("ab")

// Que3: Letter Case Permutation
//https://leetcode.com/problems/letter-case-permutation/
let myArray = [];
function findPermutaion(ip) {
  let op = "";

  solve(ip, op);
  return myArray;
}

function solve(ip, op) {
  if (ip === "") {
    // console.log(op);
    myArray.push(op);
    return;
  }

  let op1 = op;
  let op2 = op;
  if (!isNaN(ip[0])) {
    op = op + ip[0];
    let newIp = ip.substring(1);
    solve(newIp, op);
  } else {
    op1 = op + ip[0].toLowerCase();
    op2 = op + ip[0].toUpperCase();
    let newIp = ip.substring(1);
    solve(newIp, op1);
    solve(newIp, op2);
  }
}

console.log(findPermutaion("a1b2"));
