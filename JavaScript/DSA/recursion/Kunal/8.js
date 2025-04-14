// check if array is sorted 

const arr= [1,2,5,8,19,21]

const checkArray =(arr,start)=>{

    if(start===arr.length-1) {
        return true
    } 

    return arr[start]<=arr[start+1] && checkArray(arr,start+1)
}

const isSorted =(arr)=>{

    const sorted = checkArray(arr,0)
    return sorted
    
}


console.log(isSorted(arr))