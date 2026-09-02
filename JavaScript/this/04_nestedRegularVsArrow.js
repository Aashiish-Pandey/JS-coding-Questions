// 04_nestedRegularVsArrow.js
// Regular function: this from HOW it is called, not WHERE it is defined.
// Arrow function: no own this — uses the enclosing function's this.
// Run: node 04_nestedRegularVsArrow.js

const person = {
  age: 28,
  greet1: function () {
    console.log("Greet1 this.age:", this.age); // 28 — called as person.greet1()

    function greet2() {
      // greet2() — no object on the left → default binding
      console.log("Greet2 (regular) this.age:", this && this.age); // undefined
    }
    greet2();
  },
};

console.log("--- nested regular function loses this ---");
person.greet1();

const person2 = {
  age: 28,
  greet1: function () {
    console.log("Greet1 this.age:", this.age); // 28

    const greet2 = () => {
      // arrow was created inside greet1, so this is still person2
      console.log("Greet2 (arrow) this.age:", this.age); // 28
    };
    greet2();
  },
};

console.log("--- nested arrow keeps this ---");
person2.greet1();
