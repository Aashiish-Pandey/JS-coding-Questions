function incrementCount() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter1 = incrementCount()
counter1()
let counter2 = incrementCount()
counter2()