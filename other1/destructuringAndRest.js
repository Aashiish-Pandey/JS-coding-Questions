// let arr = ["Ram", "laxman", "bharat", "Shatrughan"];

// const[ram,...rest] = arr

// console.log(ram)
// console.log(rest[0])

// const[firstName, lastName] = "Ashish pandey".split(" ")

// console.log(firstName)
// console.log(lastName)

// let user = {}

// [user.firstName, user.lastName] = "ashish pandey".split(" ")

// console.log(user.firstName)

// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');

// console.log(user.name); // John
// console.log(user.surname); // Smith

// let user = {
//   name: "ashish",
//   mob: 1234,
// };

// for (let [name, mob] of Object.entries(user)) {
//   console.log(`${name} and ${mob}`);
// }

// let x= 10
// let y =20

// [x,y] = [y,x]

// console.log(x,y)

// let guest = "Jane";
// let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`);

// let person = {
//   name: "ashish",
//   mob: 99,
//   ghar: "allahabad",
//   offc: "noida",
// };

// let { name: k = "Ram", mob } = person;

// console.log(k);
// console.log(name);

// Nested Destruring

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

const {
  size: { width: item1, height: item2 },

  items: [item3, item4],
  extra,
} = options;

console.log(item1);
