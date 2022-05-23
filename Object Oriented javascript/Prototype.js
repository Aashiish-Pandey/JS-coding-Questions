function User(email, name) {
  this.email = email;
  this.name = name;
  // this.login = function () {
  //   console.log(this.name, "is logged in");
  // };
}

User.prototype.login = function () {
  console.log(this.email);
};

const user1 = new User("abc@gmail.com", "abc");
const user2 = new User("def@gmail.com", "sri sri  lanka");

user2.login()
