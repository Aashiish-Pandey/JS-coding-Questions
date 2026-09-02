class User {

  constructor(name ,age) {

    this.name = name 
    this.age =age
  }

  login() {
    console.log(`${this.name} is logged in`)

  }
  logout() {

    console.log(`logged out`)

  }
}

const u1 = new User('ashish' ,31)
u1.login()