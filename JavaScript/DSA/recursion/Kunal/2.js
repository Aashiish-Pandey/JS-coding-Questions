// Binary Search 

const arr =[1,2,5,7,9,11,13,15,17]
const target = 100

const binarySearch =(arr,target,start,end)=>{
    let mid = Math.floor(start+(end-start)/2)
    if(start>end) {
        return -1
    }
    if(arr[mid]===target) {
        return mid
    } else if(arr[mid]<target) {
        return binarySearch(arr,target,mid+1,end)

    } else {
        return binarySearch(arr,target,start,mid-1)

    }

}

console.log(binarySearch(arr,target ,0,arr.length-1))