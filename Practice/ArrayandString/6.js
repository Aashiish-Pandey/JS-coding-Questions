// Right circular rotation on an array of integers
//https://learnersbucket.com/examples/algorithms/right-circular-rotation-on-an-array-of-integers/

let arr = [4, 5, 6];

var k = 2;

for (let i = 1; i <= k; i++) {
  arr.unshift(arr.pop());
}
console.log(arr);
