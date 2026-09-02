// 07_newAndClass.js
// new fn() creates an object and sets this to that object (highest priority after a few edge cases).
// Class methods are strict: a detached method → this === undefined → throw.
// Run: node 07_newAndClass.js

function User(name) {
  // called with new → this is a fresh object
  this.name = name;
  this.say = function () {
    console.log("User", this.name);
  };
}

const u = new User("Ashish");
console.log("--- constructor ---");
u.say();

// new User() roughly:
// 1. create {}
// 2. link prototype
// 3. run User with this = that object
// 4. return the object (unless User returns another object)

class Player {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Player", this.name);
  }
}

const p = new Player("Ashish");
console.log("--- class method ---");
p.greet();

console.log("--- lost class method (strict) ---");
const greet = p.greet;
try {
  greet();
} catch (e) {
  console.log(e.message);
}

console.log("--- explicit this on class method ---");
p.greet.call({ name: "Rahul" });
