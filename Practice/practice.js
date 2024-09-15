function Counter() {
    let count =0
    this.up = function () {
        return ++count
    }

    this.down = function() {
        return --count
    }
}

let count= new Counter()

console.log(count.up())
console.log(count.up())
console.log(count.down())