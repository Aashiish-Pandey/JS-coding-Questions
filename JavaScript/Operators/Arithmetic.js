// https://www.geeksforgeeks.org/javascript-arithmetic-operators/

let n =16

function coutWrapper(num) {
    if(num===2) {
        return 1
    } else {
        num = num/2
        return num+coutWrapper(num)
    }
}

console.log(coutWrapper(n))