// Polyfill for Bind()
//https://www.youtube.com/watch?v=ke_y6z0xRpk

let myName = {
  fName: "Ashish",
  lName: "Pandey",
};

let printName = function (hometown, mob, code, text) {
  console.log(
    `${this.fName} ${this.lName} my Hometown is ${hometown} and my mobile no is ${mob} code is ${code} and text is ${text} `
  );
};

// let printMyName = printName.bind(myName, "Allahabad");
// printMyName(880024);

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printName2 = printName.myBind(myName, "Allahabad", 88888);
printName2(111, "kya hua");
