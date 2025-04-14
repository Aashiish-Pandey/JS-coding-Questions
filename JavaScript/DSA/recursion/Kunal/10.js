//Count no of zero in a number 


const num = 203104000000

const helper =(num,count)=>{

    if(num===0) {
        return count
    }
    let rem = num%10
    let newNum = Math.floor(num/10)
    if(rem===0) {

        return helper(newNum,count+1)

    } else {
        return helper(newNum,count)
    }
}

const countZero =(num)=>{
    

    let count = helper(num,0)
    return count


}


console.log(countZero(num))