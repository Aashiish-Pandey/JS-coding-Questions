// Que1: Print all the subset of a given string or Print all subsequence of a string
// Subsequence and substring are not same
// Substrings are continious
// Que2 : Print Unique Subset
// Que3: Print all the subset of a given array

// function findSubset(inString, op) {
//   let ip = inString;

//   if (ip === "") {

//     op === "" ? console.log("empty string") : console.log(op);
//     return;
//   }

//   let op1 = op;
//   let op2 = op;
//   op2 = op2 + ip[0];

//   let tempArr = ip.split("");
//   tempArr.splice(0, 1);
//   let newStr = tempArr.join("");

//   findSubset(newStr, op1);
//   findSubset(newStr, op2);
// }

// findSubset("abc", "");

// Que2 : Print Unique Subset

let subset = [];

function findSubset(inString, op) {
  let ip = inString;

  if (ip === "") {
    subset.push(op);

    return;
  }

  let op1 = op;
  let op2 = op;
  op2 = op2 + ip[0];

  let tempArr = ip.split("");
  tempArr.splice(0, 1);
  let newStr = tempArr.join("");

  findSubset(newStr, op1);
  findSubset(newStr, op2);
}

findSubset("aab", "");

let unqSubset = new Set(subset);
console.log("subset", subset);

console.log("Unique Subset", unqSubset);
