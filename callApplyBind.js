// https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
// There are three very special methods,
// call(), apply() and bind() that help us achieve explicit binding.

// call()

// function getName() {
//   console.log(this.name);
// }

// let user = {
//     name:"Ashish",
//     mob:999
// }

// getName.call(user)

// let getName = function (hobby1, hobby2) {
//   console.log(this.name);
//   console.log(hobby1);
//   console.log(hobby2);
// };

// const hobby = ["cricket", "sleeping"];

// let person = {
//   name: "Ashish",
//   mob: 8800,
// };

// getName.call(person, hobby[0], hobby[1]);

////// apply()

// let getName = function (hobby1, hobby2) {
//     console.log(this.name);
//     console.log(hobby1);
//     console.log(hobby2);
//   };

//   const hobby = ["cricket", "travelling"];

//   let person = {
//     name: "Ashish",
//     mob: 8800,
//   };

//   getName.apply(person, hobby);

// bind()

// function getName(hobby1, hobby2) {
//   console.log(this.name);
//   console.log(hobby1, hobby2);
// }

// let person = {
//   name: "ashish",
//   mob: 8800,
// };
// const hobbies = ["cricket", "movie"];

// let myName = getName.bind(person, hobbies[0], hobbies[1]);

// myName();



