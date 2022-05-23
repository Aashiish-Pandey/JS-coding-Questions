// Que1 : print 1 to n using recursion
// Que2: print n to 1 using recursion
// que3 : factorial
// Que4 : height of binary tree
// Que5 : kth symbol in grammer
// Que6: Tower of Hanoi

// function print(n) {
//   if (n == 1) {
//     console.log(1);
//     return;
//   }

//   print(n - 1);
//   console.log(n);
// }

// print(7);

// function print(n) {
//   if (n == 1) {
//     console.log(1);
//     return;
//   }
//   console.log(n);
//   print(n - 1);
// }

// print(7)

// function fact(n) {
//   if (n == 1) {
//     return 1;
//   }

//   return n * fact(n - 1);
// }

// console.log(fact(5));

// Que5 : kth symbol in grammer :

// function cmpl(num) {
//   return num === 0 ? 1 : 0;
// }

// function genGrammer(n, k) {
// //   let mid = Math.pow(2, n - 1)/2;

// let pow = 2**(n-1)
// let mid = pow/2

//   if (n == 1 && k == 1) {
//     return 0;
//   } else if (k <= mid) {
//     return genGrammer(n - 1, k);
//   } else {
//     return cmpl(genGrammer(n - 1, mid - k));
//   }
// }

// console.log(genGrammer(2, 2));



// Que6: Tower of Hanoi
