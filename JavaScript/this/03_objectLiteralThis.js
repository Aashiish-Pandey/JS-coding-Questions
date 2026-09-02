// 03_objectLiteralThis.js
// Rule: this inside { key: this } is NOT the object being created.
// It is evaluated immediately, using the OUTER this (window / module / undefined).
// A method's this is decided later, at the call site.
// Run: node 03_objectLiteralThis.js

// "use strict"; // uncomment: obj1.a becomes undefined instead of module.exports / window

const obj1 = {
  a: this, // captured NOW — not obj1
  x: function () {
    console.log("obj1.x() → this is obj1:", this === obj1);
  },
};

obj1.x();

console.log("obj1.a === obj1?", obj1.a === obj1); // always false
console.log("obj1.a:", obj1.a);
// Node (this file as a script/module): typically {}  (module.exports)
// Browser sloppy: window
// Strict / ES module: undefined
