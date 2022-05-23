class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  login() {
    console.log(this.name, "is logged in");
  }

  logout() {
    console.log(this.name, "is logged out");
  }
}

let user1 = new User("123@gmail", "ashish");
let user2 = new User("456@gmail", "pahagj");
let user3 = new User("789@gmail", "lajdas");

user1.login()

console.log(user1);
console.log(user2);
console.log(user3);
