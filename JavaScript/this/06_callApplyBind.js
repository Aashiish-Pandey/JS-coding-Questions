// 06_callApplyBind.js
// Explicit binding: you pass this yourself.
// call(thisArg, a, b)  — arguments listed
// apply(thisArg, [a, b]) — arguments as an array
// bind(thisArg, a)     — returns a NEW function with this locked
// Run: node 06_callApplyBind.js

function intro(hobby, city) {
  console.log(`${this.name} | ${hobby} | ${city}`);
}

const person = { name: "Ashish" };
const other = { name: "Rahul" };

console.log("--- call ---");
intro.call(person, "cricket", "Pune");

console.log("--- apply ---");
intro.apply(other, ["chess", "Delhi"]);

console.log("--- bind ---");
const ashishIntro = intro.bind(person, "cricket");
ashishIntro("Pune"); // this is still person

console.log("--- bind beats implicit (the dummy object is ignored) ---");
const dummy = { name: "Dummy", intro: ashishIntro };
dummy.intro("Mumbai"); // Ashish, not Dummy
