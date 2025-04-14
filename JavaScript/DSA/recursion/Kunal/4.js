

const findSum =(num)=>{
    if(num<10) {
        return num
    }
    let q = num%10
    let newNum =Math.floor(num/10)

    return q+findSum(newNum)
}

console.log(findSum(1234))