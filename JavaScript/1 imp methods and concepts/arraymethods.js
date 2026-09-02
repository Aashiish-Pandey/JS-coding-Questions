// join ,split, reverse,slice, splice,
// concat,push,pop,unshift,shift, flat(),Array.isArray()
// arr.includes(item, from), arr.indexOf(item, from)
//Array.prototype.fill()




// 😎😎😎😎😎 Join method 😎😎😎😎😎

// const elements = ["Fire", "Air", "Water"];
// const newString1 = elements.join();
// const newString2 = elements.join("");
// const newString3 = elements.join("+");
// const newString4 = elements.join(" ");
// console.log(newString1);
// console.log(newString2);
// console.log(newString3);
// console.log(newString4);


// 😎😎😎😎😎 split method 😎😎😎😎😎
// const str = "The quick brown fox jumps over the lazy dog.";

// const newArray1 = str.split(" ");
// const newArray2 = str.split("");

// console.log(newArray1)
// console.log(newArray2)

// const elements = ["Fire", "Air", "Water"];

// 😎😎😎😎😎 reverse method 😎😎😎😎😎
//  elements.reverse()

// 😎😎😎😎😎 slice method 😎😎😎😎😎
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const new1 = animals.slice(1, 4);
// const new2 = animals.slice(-4,-2)

// console.log(new1);
// console.log(new2)

// const months = ["Jan", "March", "April", "June"];


// 😎😎😎😎😎 splice method 😎😎😎😎😎
// const removed = months.splice(2);
// console.log(months);
// console.log(removed);

let arr = [2,3,1,44,5,1,3,2]

arr.fill(9,2,4)
console.log(arr)


// create an Array when only length of array is given :

// use Case pagnitaion in react 

let a1 = [...Array(10)].map((_,i)=>i+1)
console.log(a1)


// | Method      | Meaning                  | Return                 |
// | ----------- | ------------------------ | ---------------------- |
// | `.some()`   | Does **any** item match? | `true/false`           |
// | `.every()`  | Do **all** items match?  | `true/false`           |
// | `.find()`   | Get first matching item  | element or `undefined` |
// | `.filter()` | Get all matching items   | array                  |


