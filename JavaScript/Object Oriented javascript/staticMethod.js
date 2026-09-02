class User {

  constructor(name ,role) {
    this.name= name
    this.role = role
  }
  static createAdmin (name) {

    return new User(name ,'Admin')
  }

  static createGuest(name) {
    return new User(name ,'Guest')
  }
}

let admin = User.createAdmin('Ashish')

let guest = User.createGuest('Prince')

console.log(admin)
console.log(guest)
