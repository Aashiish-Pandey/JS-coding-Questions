const users = [
  { firstName: "ashish", lastName: "Pandey", age: 26 },
  { firstName: "Virat", lastName: "Kohli", age: 33 },
  { firstName: "MS", lastName: "Dhoni", age: 26 },
  { firstName: "Mike", lastName: "Tyson", age: 52 },
];

// const fullName = users.map(user=>user.firstName+ " " +  user.lastName)
// console.log(fullName)

// const ageCount = users.reduce((acc, cv) => {
//   const { age } = cv;
//   if (acc[age]) {
//     acc[age] = ++acc[age];
//   } else {
//     acc[age] = 1;
//   }

//   return acc;
// }, {});

// console.log(ageCount);

// first Name of all the people whose age is less than 30

// const firstName = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstName);

// console.log(firstName);

const firstName = users.reduce((acc,cv)=>{

    if(cv.age<30) {
        acc.push(cv.firstName)
    }
    return acc
},[])

console.log(firstName)
