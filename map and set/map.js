// map vs object ??
//Increment a Value in a Map using JavaScript
//https://bobbyhadz.com/blog/javascript-increment-value-in-map

// const myMap = new Map();

// console.log(myMap);

// const key1 = "mystr",
//   key2 = {},
//   key3 = function () {};

// myMap.set(key1, "this is a string");
// myMap.set(key2, "this is a blank object");
// myMap.set(key3, "this is an empty function");
// console.log(myMap);

// let value1 = myMap.get(key3);
// console.log(value1);

// console.log(myMap.size);

// // Itertationg in map  using for of

// for (let [key, value] of myMap) {
//   console.log(key, value);
// }

// // get only keys

// for (let key of myMap.keys()) {
//   console.log("key is ", key);
// }

// // get only values

// for (let value of myMap.values()) {
//   console.log("value is ", value);
// }

// // Itertationg in map  using forEach() method

// myMap.forEach((value, key) => {
//   console.log(`key is ${key} and value is ${value}`);
// });

// // Converting map , keys , values  to array :

// let myArray = Array.from(myMap);

// console.log("Map to array is ", myArray);

// let myKeyArray = Array.from(myMap.keys());

// console.log("Key to array is", myKeyArray);

// let myValueArray = Array.from(myMap.values());
// console.log("Values to array is", myValueArray);

// 😀😀😀 Map Practice

const myMap = new Map();

let str = "aabacbebebe";

for (let i of str) {
  myMap.set(i, myMap.get(i) + 1 || 1);
}

console.log(myMap);
myMap.set("f",0)
console.log(myMap)

if(myMap.get("f")===0) {
  myMap.delete("f")
}
console.log(myMap)
