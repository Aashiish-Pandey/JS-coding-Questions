// 08_arrowPitfalls.js
// Arrows have no own this / arguments / super.
// this is copied from the enclosing scope when the arrow is CREATED.
// call / apply / bind cannot change an arrow's this.
// Run: node 08_arrowPitfalls.js

const outerThis = this; // Node CommonJS: module.exports

const obj = {
  name: "Ashish",

  // Pitfall: arrow as a method — this is NOT obj
  arrowMethod: () => {
    console.log("arrowMethod this.name:", this.name);
    console.log("same as outer this?", this === outerThis);
  },

  regularMethod: function () {
    console.log("regularMethod:", this.name); // Ashish

    const arrow = () => {
      console.log("arrow inside regular:", this.name); // still Ashish
    };
    arrow();
    arrow.call({ name: "Nope" }); // ignored — still Ashish
  },
};

console.log("--- arrow as method ---");
obj.arrowMethod();

console.log("--- arrow inside regular method ---");
obj.regularMethod();

const box = {
  tag: this, // outer this, not box (same as 03_objectLiteralThis.js)
  read() {
    return this; // box, because of box.read()
  },
};

console.log("--- object literal this vs method this ---");
console.log("box.tag === box?", box.tag === box); // false
console.log("box.read() === box?", box.read() === box); // true
