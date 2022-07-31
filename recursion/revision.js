// que1: print number

// function print(n) {
//     if(n==1) {
//         console.log(1)
//         return
//     }
//     else {
//         print(n-1)
//         console.log(n)
//     }
// }

// print(10)

//  Que2: Factorial

// const fact = (n) => {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else return n * fact(n - 1);
// };

// console.log(fact(5));

// // Que3: reverse an array using recursion

// let arr = [4, 6, 7, 15];

// const revArray = (arr) => {
//   if (arr.length === 1) {
//     return;
//   } else {
//     let temp = arr.pop();
//     revArray(arr);
//     arr.unshift(temp);
//   }
// };

// console.log(arr);
// revArray(arr);
// console.log(arr);

// Que4:  sort using recursion

// let arr = [14, 6, 7, 15, 11, 19, 10, 11, 100];

// const sortArray = (arr) => {
//   if (arr.length === 1) {
//     return;
//   } else {
//     let temp = arr.pop();
//     sortArray(arr)+insert(arr, temp);

//   }
// };

// const insert = (arr, temp) => {
//   if (!arr.length || temp >= arr[arr.length - 1]) {
//     arr.push(temp);
//   } else {
//     let value = arr.pop();
//     insert(arr, temp);
//     arr.push(value);
//   }
// };

// console.log(arr);
// sortArray(arr);
// console.log(arr);

// Que5: Print all subset or subsequence of a given string

// let str = "abc";
// let ans = [];

// const printAllSubSet = (str) => {
//   let op = "";
//   let ip = str;

//   solve(ip, op);
// };

// function solve(ip, op) {
//   if (ip === "") {
//     ans.push(op);
//     return;
//   } else {
//     let op1 = op;
//     let op2 = op + ip[0];
//     let newIp = ip.substring(1);
//     solve(newIp, op1);
//     solve(newIp, op2);
//   }
// }

// printAllSubSet(str);
// console.log(ans);

// que 6: Permutation with Spaces

// let ans = [];

// const findPermutaion = (str) => {
//   let ip = str;
//   let op = "";
//   op = ip[0];
//   ip = ip.slice(1);
//   let ans = [];
//   solve(op, ip);
// };

// function solve(op, ip) {
//   if (ip === "") {
//     ans.push(op);
//     return;
//   } else {
//     let op1 = op + ip[0];
//     let op2 = op + " " + ip[0];
//     let newIp = ip.slice(1);

//     solve(op1, newIp);
//     solve(op2, newIp);
//   }
// }

// findPermutaion("ABC");
// console.log(ans);

// Que7 : Permuation with case change

// let ans = [];

// const casePermutaion = (str) => {
//   let op = "";
//   let ip = str;

//   solve(op, ip);
// };

// function solve(op, ip) {
//   if (ip === "") {
//     ans.push(op);
//     return;
//   } else {
//     let op1 = op + ip[0].toLowerCase();
//     let op2 = op + ip[0].toUpperCase();
//     let newIp = ip.slice(1);
//     solve(op1, newIp);
//     solve(op2, newIp);
//   }
// }

// casePermutaion("ab");

// console.log(ans);

// que8 : Letter Case Permutation | Recursion

// let ans = [];
// const letterCasePerm = (string) => {

//   let op = "";
//   let ip = string;
//   solve(op, ip);
// };

// function solve(op, ip) {
//   if (ip === "") {
//     ans.push(op);
//     return;
//   } else {
//     let temp = ip[0];

//     if (typeof temp === "number") {
//       let op1 = op + temp;
//       let newIp = ip.slice(1);
//       console.log(newIp)
//       solve(op1, newIp);
//     } else {
//       let op1 = op + temp.toLowerCase();
//       let op2 = op + temp.toUpperCase();
//       let newIp = ip.slice(1);
//       console.log(newIp)
//       solve(op1, newIp);
//       solve(op2, newIp);
//     }
//   }
//   console.log(ans)
// }

// letterCasePerm("a1b2");
// console.log(ans);

// Generate all Balance Parenthesis

let ans = [];
const balncParen = (n) => {
  let close = n;
  let open = n;
  let op = "";

  solve(op, close, open);
};

function solve(op, close, open) {
  if (close === 0) {
    ans.push(op);
    return
  } else {
    if (open < close && open !== 0) {
      let op1 = op + "(";
      let op2 = op + ")";
      solve(op1, close, open--);
      solve(op2,close--,open)
    } else {
      let op1 = op + "(";
      solve(op1, close, open--);
    }
  }
}

balncParen(2);

console.log(ans);
