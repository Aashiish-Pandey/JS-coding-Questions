function User(email, name) {
  this.email = email;
  this.name = name;
  this.login = function () {
    console.log(this.name, "is logged in");
  };
}

const user1 = new User("abc@gmail.com", "abc");
const user2 = new User("def@gmail.com", "sri lanka");
console.log(user1);
console.log(user2);
console.log(user2.login());
