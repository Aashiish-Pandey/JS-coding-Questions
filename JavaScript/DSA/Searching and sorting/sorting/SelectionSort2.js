// selection sort using Recursion

const arr = [64, 34, 25, 12, 22, 11, 90];

const getMinIndex =(arr,start,end ,minIndex)  =>{
    if(start ===end) {
        return minIndex
    }
    
    if(arr[start]<arr[minIndex]) {
        return getMinIndex(arr,start+1,end,start)
    } else {
        return getMinIndex(arr,start+1,end,minIndex)
    }
}

const helper = (arr,start,end)=>{

    if(start===end) {
        return
    }

    let  minIndex = getMinIndex(arr,start,end ,start)

   if(minIndex!==start) {
    [arr[start],arr[minIndex]] =[arr[minIndex] ,arr[start]]
   }

    helper(arr,start+1,end)
}


const selectionSort =(arr)=>{

    helper(arr,0,arr.length-1)

}


selectionSort(arr)
console.log('array after sorting' ,arr);