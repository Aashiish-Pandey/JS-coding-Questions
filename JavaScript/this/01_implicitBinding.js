// 01_implicitBinding.js
// Rule: for a regular function, this === the object LEFT of the dot at the call site.
// Same function, three call sites → three different this values.
// Run: node 01_implicitBinding.js
// Browser: open index.html (var age attaches to window, so scenario 1 prints 28).

function displayAge() {
  console.log("this.age:", this.age);
  console.log("this:", this);
}

// --- 1. No object on the left → default binding ---
var age = 28;
console.log("--- 1. displayAge() ---");
displayAge();
// Browser (sloppy): this === window, this.age === 28
// Node: this === global, but var age is NOT on global → this.age === undefined

// --- 2. Called as a method → this is person ---
var person = {
  age: 26,
  displayAge: displayAge,
};
console.log("--- 2. person.displayAge() ---");
person.displayAge(); // 26, this === person

// --- 3. Nested object: only the last object before the call matters ---
var family = {
  age: 26,
  displayAge: displayAge,
  nestedObject: {
    age: 40,
    displayAge: displayAge,
  },
};
console.log("--- 3. family.displayAge() ---");
family.displayAge(); // 26
console.log("--- 3. family.nestedObject.displayAge() ---");
family.nestedObject.displayAge(); // 40  (this is nestedObject, NOT family)
