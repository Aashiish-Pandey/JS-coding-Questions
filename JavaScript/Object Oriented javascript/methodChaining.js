class User {
    constructor(email, name) {
      this.email = email;
      this.name = name;
      this.score= 0
    }
  
    login() {
      console.log(this.name, "is logged in");
      return this
    }
  
    logout() {
      console.log(this.name, "is logged out");
      return this
    }

    updateScore() {
        this.score++
        console.log(this.email, 'score is now' , this.score)
        return this
    }
  }
  
  let user1 = new User("123@gmail", "ashish");
  let user2 = new User("456@gmail", "pahagj");
  let user3 = new User("789@gmail", "lajdas");
  
  user1.login().logout().updateScore()
 
  
  
  