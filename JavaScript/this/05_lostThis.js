// 05_lostThis.js
// Implicit binding only works at the call site: obj.method()
// If you pass the function around, the dot is gone → default binding.
// Run: node 05_lostThis.js

const user = {
  name: "Ashish",
  greet() {
    console.log("hello", this && this.name);
  },
};

console.log("--- implicit ---");
user.greet(); // this === user

console.log("--- 1. extracted method ---");
const fn = user.greet;
fn(); // same function, call site is fn() → this lost

console.log("--- 2. passed as callback ---");
function runLater(cb) {
  cb(); // call site is cb(), not user.greet()
}
runLater(user.greet);

console.log("--- 3. setTimeout (fires after logs below) ---");
setTimeout(user.greet, 50); // timer calls greet as a free function → this lost
setTimeout(() => user.greet(), 80); // fix: still call with a dot
setTimeout(user.greet.bind(user), 110); // fix: this locked to user

const obj = {
  name: "Ashish",
  tasks: ["read", "code"],
  printRegular() {
    // forEach calls the callback as a free function
    this.tasks.forEach(function (task) {
      console.log("regular cb this.name:", this && this.name, "|", task);
    });
  },
  printArrow() {
    this.tasks.forEach((task) => {
      console.log("arrow cb this.name:", this.name, "|", task);
    });
  },
};

console.log("--- 4. forEach regular vs arrow ---");
obj.printRegular();
obj.printArrow();
