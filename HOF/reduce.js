// Sum all the values of an array
// Counting instances of values in an object
//Grouping objects by a property

// const myarr = [1, 3, 4, 5, 6, 7, 6, 5, 6, 6, 6, 6, 6, 6, 3, 3235, 436, 643];
// let sum = myarr.reduce((acc, cv) => acc + cv, 0);
// console.log(sum);

// let names = [
//   "Alice",
//   "Bob",
//   "Tiff",
//   "Bruce",
//   "Alice",
//   "Bob",
//   "Tiff",
//   "Bruce",
//   "Alice",
// ];

// let countObj = names.reduce((acc, cv) => {
//   if (cv in acc) {
//     acc[cv]++;
//   } else {
//     acc[cv] = 1;
//   }

//   return acc;
// }, {});
// console.log(countObj)

let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const newPeople = people.reduce((acc, cv) => {
  let key = cv.age;

  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(cv);

  return acc;
}, {});

console.log(newPeople);
