const array1 = [1, 2, 3, 4, 5];

let double = [];

const x= array1.forEach((item) => {
  double.push(item * 2);
});

console.log(x)

console.log(double);
