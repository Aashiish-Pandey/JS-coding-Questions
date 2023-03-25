// value of this will be detrmined by  how a function is being called not where function is defined.

// exmple1:

var person = {
  age: 28,
  greet1: function () {
    console.log("Greet1", this.age);
    console.log("Greet1", this);
    function greet2() {
      console.log("Greet2", this.age);
      console.log("Greet2", this);
    }
    greet2();
  },
};

person.greet1();

// exaple2: using arrow function


var person = {
    age: 28,
    greet1: function () {
      console.log("Greet1", this.age);
      console.log("Greet1", this);
      greet2:() =>{
        console.log("Greet2", this.age);
        console.log("Greet2", this);
      }
      greet2();
    },
  };
  
  person.greet1();
