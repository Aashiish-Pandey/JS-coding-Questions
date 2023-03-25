// this refer to the  object that is currently calling the fuction


// scenario1:
var age=28

function  displayAge(){
    console.log(this.age)
    console.log(this)
}

// displayAge()


// sceanrio2: 
// var person ={
//     age:26,
//     displayAge:displayAge
// }

// person.displayAge()

// sceanrio3

var person ={
    age:26,
    displayAge:displayAge,
    nestedObject:{
        age:40,
        displayAge:displayAge
    }
}
person.displayAge()
person.nestedObject.displayAge()




