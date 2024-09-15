// print 1 to n



const printNum =(i,n)=>{
    if(i>n) return
    console.log(i)
    printNum(i+1,n)
}
function print(n) {
    let i=1


    printNum(i,n)
     
}

console.log(print(10))