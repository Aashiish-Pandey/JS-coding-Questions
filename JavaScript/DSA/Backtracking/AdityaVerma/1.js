// Permutation of Strings using recursion

const str ="aabc"


let dupObj ={}
const solve =(op,ip,ans)=>{

    if(ip==="") {
        ans.push(op)
        return
    }
    for(let i=0;i<ip.length;i++) {

        let newOp= op+ip[i]
        let newIp= ip.replace(ip[i],"")
        if(dupObj[newIp]!==newOp) {
            solve(newOp,newIp ,ans)
            dupObj[newIp]=newOp
        }
        

    }

}



const findPermutation =(str)=>{
    let ans =[]
    let ip=str
    let op=""

    solve(op,ip ,ans)
    return ans

}


console.log(findPermutation(str))

