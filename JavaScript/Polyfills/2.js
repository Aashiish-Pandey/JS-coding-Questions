// Polyfills for call()

let person = {
  fName: "Ashish",
  lName: "Pandey",
};

function printName(mob, text) {
  console.log(
    `My name is ${this.fName} ${this.lName} and my Mob no is ${mob} and I wanna say ${text} `
  );
}

printName.call(person);

Function.prototype.myCall = function (...args) {
  let obj = args[0];
  let perem = args.slice(1);
  this.apply(obj, perem);
};

printName.myCall(person, 880024, "Jai Hind");
