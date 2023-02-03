// const numbers = [4, 2, 5, 1, 3];
// numbers.sort();
// console.log(numbers);
// numbers.sort((a,b)=>b-a)
// console.log(numbers);
// numbers.sort((a,b)=>a-b)
// console.log(numbers);

// sort by value 

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];


  items.sort((a,b)=>a.value-b.value)
  console.log(items)
  items.sort((a,b)=>a.name-b.name)
  console.log(items)