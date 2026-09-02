// Method chaining - Part 1
// Success rate: 12.31%
// Explain method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply.

// Example
// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total);
// //20


const calculator ={
    total:0,
    add(value) {
        this.total+=value
        return this

    },
    subtract(value) {

        this.total-=value
        return this

    },
    divide(value) {
        this.total/=value
        return this
    },
    multiply(value) {
        this.total*=value
        return this

    }

}

console.log(calculator.add(10).subtract(5).multiply(100).divide(10))
console.log(calculator.total)