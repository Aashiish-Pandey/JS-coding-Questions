// https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding
// https://www.youtube.com/watch?v=VkmUOktYDAU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=9

// exmp1:

// let name ="pandit ji"
// let obj ={name:"ashish"}

// function printName() {
//     console.log(this.name)
// }

// printName()

// exmp2:

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print()
// }

// for(let i=0;i<animals.length;i++) {

//     printAnimals.call(animals[i],i)

// }

function checkPassword(ok, fail) {
  let password = prompt("password?", "");
  if (password === "ashish") {
    ok();
  } else {
    fail();
  }
}

let user = {
  name: "ashish pandey",
  login(result) {
    console.log(this.name + (result ? "login successfull" : "login failed"));
  },
};

checkPassword(user.login.bind(user,true),user.login.bind(user,false));
