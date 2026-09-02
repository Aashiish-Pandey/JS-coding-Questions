// Create a Sampling function
// Create a function in JavaScript that accepts a function 
// as input and a count and executes that input function once for 
// a given count of calls. Known as sampling function.

// function message(){
//   console.log("hello");
// }

// const sample = sampler(message, 4);
// sample();
// sample();
// sample();
// sample(); // this will be executed
// sample();
// sample();
// sample();
// sample(); // this will be executed


const print = ()=>{
    console.log("Hello")
}


const sampler =(callback ,count)=>{

    let currentCount =0


    return function () {
        if(currentCount===count-1) {
              callback()
              currentCount =0
        } else {
            currentCount++
        }
      
    }
}

const sample =sampler(print ,4)
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed