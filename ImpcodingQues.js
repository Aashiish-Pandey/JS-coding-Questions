// 1: count unique element in an array
// 2: remove duplicate
// 3: reversing a String
// 4: reversing indivisual element of an array of string
// 5: Flattning a nested array

// const array1 = [1, 4, 9, 3, 16, 4, 9, 4, 9, 4, 9];

// const unqEl = [...new Set(array1)];
// console.log(unqEl);




// const myName = "ashish";

// const revrString = myName.split("").reverse().join("");
// console.log(revrString);


const peoples = ["ashish","shubham","dubey","prince","pranjal"]

const rev = peoples.map(people=> {

    return people.split('').reverse().join('')
})

console.log(rev)

