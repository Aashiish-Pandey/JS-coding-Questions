// find the sum of digits of a number

let n = 123;
let sum = 0;

while (n != 0) {
  let rem = n % 10;
  sum += rem;

  n = Math.floor(n / 10);
}
console.log(sum);

