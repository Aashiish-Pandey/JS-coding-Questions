let matrix =[[1,3]]
let target =3

const bSearch = (arr,target)=>{
    let start =0
    let end = arr.length-1
    let mid=-1
    console.log('arr',arr)
    while(start<=end) {

        mid = Math.floor((start+end)/2)
        if(arr[mid]===target) {
            console.log('arr[mid',arr[mid])
            return true
        } else if(arr[mid]>target) {
            end =mid-1
        } else {
            start=mid+1
        }

    }
    return false
 }
var searchMatrix = function(matrix, target) {

    for(let i=0 ;i<matrix.length;i++) {
        if(matrix[i][0]<=target && target<=matrix[i][matrix[i].length-1]) {

            const isPresent = bSearch(matrix[i],target)
            return isPresent
        }
    }

    return false
    
};

console.log(searchMatrix(matrix,target));