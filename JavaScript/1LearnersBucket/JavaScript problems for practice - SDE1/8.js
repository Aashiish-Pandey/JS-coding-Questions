const quest= {
    
// JavaScript has a setTimeout and clearTimeout(timerId) inbuilt method, 
// clearTimeout clears the setTimeout whose id is provided.

// Implement a custom clearAllTimeout method that will clear / stop all the setTimeouts.

// Create an custom object MY_TIMERS that will have two methods setTimeout and clearAllTimeout.
//  setTimeout  will work as an normal setTimeout and we can create any count of it. 
// Invoking clearAllTimeout should clear/stop all the existing setTimeouts.

// Example
// Input:
// const id = MY_TIMERS.setTimeout(() => {console.log("hello")}, 1000);
// const id2 = MY_TIMERS.setTimeout(() => {console.log("hello")}, 2000);

// console.log(id, id2);

// // Clears all the timers
// MY_TIMERS.clearAllTimeout();
// // No log should be printed

// Output:
// 13, 14 //timeoutId
}


// const MY_TIMERS = (() => {
//   const activeTimers = new Set();

//   return {
//     setTimeout(callback, delay, ...args) {
//       const id = window.setTimeout(() => {
//         activeTimers.delete(id); // cleanup after execution
//         callback(...args);
//       }, delay);

//       activeTimers.add(id);
//       return id;
//     },

//     clearAllTimeout() {
//       activeTimers.forEach(id => clearTimeout(id));
//       activeTimers.clear();
//     }
//   };
// })();


const MY_TIMERS ={

  timers : new Set(),

  setTimeout(callback ,delay) {

    let id

    this.timers.delete(id)

     id = setTimeout(callback,delay)
    this.timers.add(id)
  return id

  },
  clearAllTimeOut() {
    this.timers.forEach(id=>clearTimeout(id))

    this.timers.clear()

  }
}

MY_TIMERS.setTimeout(()=>console.log("Hello1"),1000)
MY_TIMERS.setTimeout(()=>console.log("Hello2"),2000)
MY_TIMERS.setTimeout(()=>console.log("Hello3"),3000)
MY_TIMERS.setTimeout(()=>console.log("Hello4"),4000)
MY_TIMERS.setTimeout(()=>console.log("Hello5"),5000)
console.log(MY_TIMERS.timers)
console.log(MY_TIMERS.clearAllTimeOut())