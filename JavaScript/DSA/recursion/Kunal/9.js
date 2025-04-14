// liner search

const arr = [2,5,5,6,2,3,19,21]
let target = 5
const findEl =(start,target ,arr ,ans)=>{

    if(start>arr.length-1) {
        return ans
    }

    // return arr[start]===target || findEl(start+1,target,arr)
    if(arr[start]===target) {
        ans.push(start)
    } 
        return findEl(start+1,target,arr ,ans)
    

}
const searchEl =(arr,target)=>{

    let ans =[]


 findEl(0,target ,arr ,ans)
 return ans

}


console.log(searchEl(arr,target))