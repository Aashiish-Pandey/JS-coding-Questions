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

class Admin  extends User{


}

let admin1 = new Admin()
admin1.login("000@gmail.com","admin class")




