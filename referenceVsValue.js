// let a = 1;
// let b = 2;

// function passByValue(a, b) {
//   let temp;
//   temp = b;
//   b = a;
//   a = temp;

//   console.log(a, b);
// }

// passByValue(a, b);

// console.log(a, b);

let person = {
  a: "Ashish",
  b: 8800,
};

function passByRef(obj) {
  let temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;
}

console.log(person.a, person.b);

passByRef(person);
console.log(person.a, person.b);
