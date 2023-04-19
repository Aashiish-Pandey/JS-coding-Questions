// pollyfills for apply()

let person = {
  fName: "Ashish",
  lName: "Pandey",
};

function printName(mob, text) {
  console.log(
    `My name is ${this.fName} ${this.lName} and my Mob no is ${mob} and I wanna say ${text} `
  );
}

printName.apply(person, [101010, "Jai Hind"]);

Function.prototype.myApply = function (...args) {
  let [obj, parem] = args;

  this.call(obj, ...parem);
};

printName.myApply(person, [20202020, "Jai Hind jai Bharat"]);
