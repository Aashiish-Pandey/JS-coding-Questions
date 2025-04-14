// Reverse a number 

const reverseNumber =(num,rev=0)=>{

    if(num===0) {
        return rev
    }
     
   return reverseNumber(Math.floor(num/10) ,rev*10+num%10)


}

console.log(reverseNumber(12345))