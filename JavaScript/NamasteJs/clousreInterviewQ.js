// Q: 😀😁😀Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question

// using let :

// function print(num) {
//   for(let i=0;i<=num;i++) {
//     setTimeout(()=>{
//       console.log(i)
//     },i*1000)
//   }
// }

// print(5)


// using var 

// function printNum(n) {
//   for (var i = 1; i <= n; i++) {
//     tempPrint(i);
//   }
//   function tempPrint(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

  
// }

// printNum(5);

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function print() {
//     console.log(i);
//   }, i * 1000);
// }

// console.log("hello");

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function print() {
//     console.log(i);
//   }, i * 1000);
// }

// console.log("hello");

// function x() {
  //     function close(i) {
    //       setTimeout(function () {
      //         console.log(i);
      //       }, i * 1000);
      
      //       // put the setT function inside new function close()
      //     }
      //     close(i); // everytime you call close(i) it creates new copy
      //   }
      //   console.log("Namaste Javascript");
      // }
      // x();
      
      // function outest() {
        //     var c = 20;
        //     function outer(str) {
          //     let a = 10;
          //     function inner() {
            //     console.log(a, c, str);
            //     }
            //     return inner;
            //     }
            //     return outer;
            //    }
            //    let a = 100;
            //    outest()("Hello There")();
            
            //🤩🤗🙂🙂😍 Data hiding or encapsualtion using Closure 🤩🤗🙂🙂😍
            
function increment() {
  let count = 0;
  //   for (var i = 1; i <= 5; i++) {

  return function incrementCount() {
    count++;
  };
}

const counter1 = increment();
counter1();
counter1();

console.log(count)