// const a = {
//     en: 'Bye',
//     de: 'Tschüss'
//   }
//   a.ef="ash"
//   let b = {...a}

//   b.de = 'Ciao'
//   console.log(b.ef)
//   console.log(a.ef)
//   console.log(a.de)

// const a = {
//     foods: {
//         dinner: "pizza"
//     }
// }

// const b ={...a}

// b.foods.dinner ="egg"

// console.log(a.foods.dinner)
// console.log(b.foods.dinner)

// const c= {
//     foods:{...a.foods}
// }

// c.foods.dinner ="chicken"
// console.log(a.foods.dinner)
// console.log(c.foods.dinner)

// const family = {
//   father: {
//     name: "Ram",

//     job: {
//       home: "eating",
//     },
//   },
// };

// const yrfamily = JSON.parse(JSON.stringify(family));
// yrfamily.father.name = "Laxman";

// console.log(family.father.name);
// console.log(yrfamily.father.name);

// const a = [1, 2, 3, 4];

// let b = [...a];

// b[1] = 100;
// console.log(a[1]);
// console.log(b[1]);

// const a = [1, 2, 3, 4, [10, 100]];

// let b = [...a];
// b[4][0] = 500;

// console.log(a[4][0]);
// console.log(b[4][0]);

const a = [1, 2, 3, 4, [20, 200]];

let b = JSON.parse(JSON.stringify(a));
b[4][1] = 1000;

console.log(b[4][1]);
console.log(a[4][1]);
