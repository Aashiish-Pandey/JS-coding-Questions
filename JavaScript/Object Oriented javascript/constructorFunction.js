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


///Example2: // data hiding and Encapsualtion

function Counter() {
  let count=0
  this.increment = function () {
    count++;
    console.log(count);
  };

  this.decrement = function () {
    count--;
    console.log(count);
  };
}

let counter1 = new Counter();
let counter2 = new Counter();
counter1.increment();
counter2.decrement();
