// // Example1

// class User {

//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(`${this.name} is speaking `)
//     }
// }

// const u1 = new User('Ashish')
// u1.speak()

// const NewUser = function(name) {
//     this.name = name
// }

// NewUser.prototype.speakNewUser = function () {
//     console.log(`${this.name} is speaking very much`)
// }
// const u2 = new NewUser('Diplai')
// u2.speakNewUser()

// ////////////// Example2 //////


// class BankAccount {

//     #bankBalance =0
//     tempBalance =2002020

//     deposit(amount) {

//         this.#bankBalance+=amount
//     }

//     getBalance() {
//         return this.#bankBalance
//     }
// }

// const account1 = new BankAccount()
// account1.deposit(1000)
// console.log(account1.getBalance())
// // console.log(account1.#bankBalance)
// console.log(account1.tempBalance)


// ...................Example3 .........................


// function User(name,role ,permission) {

//     this.name = name
//     this.role= role
//     this.permission = permission
// }


// User.prototype.canEdit = function() {
//     return this.permission.includes('write')
// }

// User.prototype.describe = function() {
//     console.log(`${this.name} ${this.role}`)
// }

// let user1 = new User('ashish' ,'dev',['read','write' ,'edit'])
// let user2 = new User('Dipali' ,'Manager',['read' ,'edit'])
// console.log(user1.canEdit() ,user2.canEdit())
// user1.describe()
// user2.describe()

// ......................... example4 ...................................

// class User {

//     constructor(name,role,permisssion) {
//         this.name = name
//         this.role=role
//         this.permisssion= permisssion
//     }

//     canEdit() {
//         return this.permisssion.includes('write')
//     }

//     describe() {
//         console.log(`${this.name} ${this.role}`)
//     }
// }

// const user1 = new User('Ashish' ,'Dev',['read','write','edit'])
// const user2 = new User('Dipali' ,'Manager',['read','edit'])

// console.log(user1.canEdit() ,user2.canEdit())

// user1.describe()
// user2.describe()


//.............................. Example 5..................................

class BankAccount {

    #balance =0

    deposit(amount) {
        if(amount<0) {
            throw new Error('Amount Should be greater than 0')
        }
        this.#balance+=amount

    }

    withdraw(amount) {
        if(amount>this.#balance) {

            throw new Error(`you can not withdraw more than ${this.#balance}`)
        }
        this.#balance -=amount

    }

    getBalance() {

        console.log(`your current balance is ${this.#balance}`)

    }
}

const account1 = new BankAccount()

account1.deposit(100)
account1.withdraw(500)
account1.getBalance()