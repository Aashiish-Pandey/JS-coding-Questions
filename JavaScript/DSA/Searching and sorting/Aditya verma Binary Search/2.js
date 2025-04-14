// https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/

const arr =  [4,5,6,7,0,1,2]
const target =3

const searchEl=(arr ,target)=>{

    let start=0
    let end = arr.length-1
    let mid=-1
    let index=false
    while(start<=end) {

         mid =Math.floor((start+end)/2)

         if(arr[mid]===target) {
             index=true
         }

         // if left sorted

         if(arr[start]<=arr[mid]) {
            if(arr[start]<=target && arr[mid]>=target) {
                end = mid-1
            } else {
                start=mid+1
            }
         } else if(arr[mid]<=arr[end]) {
            if(target>=arr[mid] && arr[end]>=target) {
                start=mid+1
            } else {
                end= mid-1
            }

         }
    }
    return index



}


console.log(searchEl(arr,target))