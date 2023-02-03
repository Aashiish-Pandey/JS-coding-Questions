// https://javascript.info/object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

let myobj = {};

let str = "aabacbebebe";

let i = 0;
let j = 0;

while (j < str.length) {
  myobj[str[j]] = myobj[str[j]] + 1 || 1;
  j++;
}

// let objectLength = Object.keys(myobj).length;

// console.log(myobj);
// console.log(objectLength);

// delete myobj[[str[i]]];
// console.log(myobj);
// console.log(Object.keys(myobj).length);
console.log(Object.keys(myobj).length);
while (3<Object.keys(myobj).length) {
    console.log(myobj[str[i]] !== 0)
    console.log(myobj[str[i]])
  if (myobj[str[i]] !== 0) {
    myobj[str[i]]--;
  } else {
    delete myobj[str[i]];
  }
  console.log(myobj);
 
}
