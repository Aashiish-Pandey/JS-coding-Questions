// let timer = setInterval(()=>console.log("Hello") ,1000)

// setTimeout(()=>clearInterval(timer) ,6001)


// nested set timeout 

let  timer = setTimeout(function printName() {

    console.log("Ashish")

    timer = setTimeout(printName,1000)

   setTimeout(()=>clearTimeout(timer),10000)
} ,1000)