// Create a toggle function in JavaScript that accepts a list of arguments and toggles each of them when invoked in a cycle.

// Example
// let hello = toggle("hello");
// hello() // "hello";
// hello() // "hello";

// let onOff = toggle("on", "off");
// onOff() // "on"
// onOff() // "off"
// onOff() // "on"

const toggle = (...rest) => {
  let index = -1;

  return function () {
    index++
    return rest[index % rest.length];
  };
};

const onOff = toggle("on", "off",'reset');

console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())


