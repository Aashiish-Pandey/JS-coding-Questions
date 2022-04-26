// https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
// https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/

// let blog = {
//     name: 'Tapas',
//     address: 'freecodecamp',
//     message: function() {
//         console.log(`${this.name} blogs on ${this.address}`);
//     }
// };

// blog.message();

// function greeting(obj) {
//     obj.logMessage = function() {
//         console.log(`${this.name} is ${this.age} years old!`);
//     }
// };

// const tom = {
//     name: 'Tom',
//     age: 7
// };

// const jerry = {
//     name: 'jerry',
//     age: 3
// };

// greeting(tom);
// greeting(jerry);

// tom.logMessage ();
// jerry.logMessage ();

// let sayName = function(name) {
//     console.log(this.name);
// };

// global.name = 'Tapas';
// sayName();

//😊😊😊😊😊😊  this with Arrow function 😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊

// var bunny = {
//     name: 'Usagi',
//     showName: function() {
//       console.log(this.name);
//     }
//   };

//   bunny.showName();

// var bunny = {
//   name: "Usagi",
//   tasks: ["transform", "eat cake", "blow kisses"],

//   showTasks: function () {
//     let that = this;
//     this.tasks.forEach(function (task) {
//       console.log(that.name + " wants to " + task);
//     })
//   },
// };

// bunny.showTasks();

// now using arrow function

var bunny = {
  name: "Ashish",
  tasks: ["eat", "sleep", "work", "repeat"],
  doTask: function () {
    this.tasks.forEach((task) => {
      console.log(this.name);
      //   console.log(task);
    });
  },
  doOtherTask: function () {
    this.tasks.forEach(function (task) {
      console.log(this.name);
      //   console.log(task);
    });
  },
};

bunny.doTask();
bunny.doOtherTask();
