// Find the Rotation Count in Rotated Sorted array  {very good}
// https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array   

const arr =[15, 18, 2, 3, 6, 12]

const findRotationCount =(arr) =>{

    let start =0
    let end = arr.length-1
    let mid=-1;
    while(start<=end) {
        mid= Math.floor((start+end)/2)
        
        if(arr[mid]<arr[mid-1] && arr[mid]<arr[mid+1]) {
            return mid
        } else if(arr[mid+1]>=arr[end]) {
            start=mid+1
        }else {
            end=mid-1
        }
    }
    return mid

}

console.log(findRotationCount(arr))