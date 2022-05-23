function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  // this.login = function () {
  //   console.log(this.name, "is logged in");
  // };
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

function Admin(...args) {
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype)

const user1 = new User("abc@gmail.com", "abc");
const user2 = new User("def@gmail.com", "sri sri  lanka");
user2.login();

const admin1 = new Admin("admin1@gmail.com", "admin1");
console.log(admin1);
