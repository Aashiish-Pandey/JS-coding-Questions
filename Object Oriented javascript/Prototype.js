// function User(email, name) {
//   this.email = email;
//   this.name = name;
//   // this.login = function () {
//   //   console.log(this.name, "is logged in");
//   // };
// }

// User.prototype.login = function () {
//   console.log(this.email);
// };

// const user1 = new User("abc@gmail.com", "abc");
// const user2 = new User("def@gmail.com", "sri sri  lanka");

// user2.login()

function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  // this.login = function () {
  //   console.log(this.name, "is logged in ");
  // };
}
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, " is login");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, " is logout");
};

function Admin(...args) {
  User.apply(this, args);
  console.log(args);
}

Admin.prototype = User.prototype
let user1 = new User("ashish", "abc@gmail.com");
let user2 = new User("RAM", "ram@gmail.com");
let admin = new Admin("ADMIN", "admin@gmail.com");
console.log(admin);
console.log(user1);
admin.login()


