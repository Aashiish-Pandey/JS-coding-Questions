// Nested setTimeout()
// let count =0

// let timeRef = setInterval(function run(){
//     count++

//     console.log("Hello")
//     if(count ===10) {
//         clearInterval(timeRef)
//     }
// },1000)


// using nested timeout 

const print =()=>{
    console.log("Hello")
}
let delay =1000
let count =0

let timerRef = setTimeout(function print() {
    console.log("Hello")
    count++
    if(count>1) {
        delay+=1000

    }
    if(count = 10) {
        clearTimeout(timerRef)
    }
   
    timerRef = setTimeout(print ,delay)
} ,delay)