// 😎😎😎😎

let testObj = {
  name: "Ashish",
  printName() {
    console.log(this.name);
  },
};

testObj.printName();

// 😎😎😎😎

const userOne = {
  email: "ash06pandey",
  name: "ashish",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};
console.log(userOne.email);
console.log(userOne["name"]);
console.log(userOne.login());
