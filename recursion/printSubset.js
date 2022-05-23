// Que1: Print all the subset of a given string
// Que2: Print all the subset of a given array

function findSubset(inString, op) {
  let ip = inString;

  if (ip === "") {
    op === "" ? console.log("empty string") : console.log(op);
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

findSubset("abc", "");
