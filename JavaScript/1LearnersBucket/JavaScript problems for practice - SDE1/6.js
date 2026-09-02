// Currying - Part 1
// Success rate: 27.27%
// Create a JavaScript function that returns the sum of the previous values.

// Example
// const sum = curry();
// sum(5); // 5
// sum(3); // 8
// sum(4); // 12
// sum(0); // 12

const curry =()=>{

    let total =0
    

    return function (num) {
        total+=num
        return total


    }
}

const sum =curry()
console.log(sum(5))
console.log(sum(6))
console.log(sum(7))
console.log(sum(100))