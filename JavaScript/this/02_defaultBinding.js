// 02_defaultBinding.js
// Rule: fn() with nothing on the left → default this.
//   sloppy mode: this === globalThis (window in browser, global in Node)
//   "use strict": this === undefined
// Run: node 02_defaultBinding.js
// Then uncomment "use strict" at the top and run again.

// "use strict";

function showThis() {
  console.log("this:", this);
  console.log("this === globalThis?", this === globalThis);
}

console.log("--- showThis() ---");
showThis();

function showAge() {
  // Strict: this is undefined → use optional access so the file still runs
  console.log("this.age:", this && this.age);
}

var age = 28;
console.log("--- showAge() ---");
showAge();

console.log("--- Node vs browser ---");
console.log("globalThis.age:", globalThis.age);
// Node module: var age is local, not on globalThis → undefined
// Browser script: var age becomes window.age → 28
