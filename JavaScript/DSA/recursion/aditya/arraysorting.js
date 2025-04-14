// que 5: sort an array using recursion

let inArr = [1, 5, 4, 2];

function mySort(inArr) {
  if (inArr.length == 0 || inArr.length == 1) return; // Base condition

  let temp = inArr.pop();
  mySort(inArr); // Hypothesis
  insert(inArr, temp); // Induction
}

function insert(inArr, temp) {
  if (inArr.length == 0 || inArr.length == 1) {
    // Base condition
    inArr.push(temp);
    return;
  }
  let val = inArr.pop();
  insert(inArr, temp); // Hypothesis
  inArr.push(val); // induction
}

mySort(inArr);
console.log(inArr);
