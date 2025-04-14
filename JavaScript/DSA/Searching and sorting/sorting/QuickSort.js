// Quick sort


const arr =[4,6,2,5,7,9,1,3]

const insertPivot =(arr,start,end)=>{
  
  let pivot = start
  let i= start
  let j=end
  
  while(i<j) {
    
    while(arr[i]<=arr[pivot] && i<=end-1) {
      i++
    }
    while(arr[j]>arr[pivot] && j>=start+1) {
      j--
    }
    if(i<j) {
      [arr[i] ,arr[j]] =[arr[j],arr[i]]
      
    }
    
 
  }
   [arr[j],arr[pivot]] =[arr[pivot] ,arr[j]]
  return j
  
}

const sortArray =(arr,start,end)=>{
  
  if(end<start) {
    return
  }
  
  
  let partionIndex = insertPivot(arr,start,end)
  
  sortArray(arr,start,partionIndex-1)
  sortArray(arr,partionIndex+1,end)
  
}


const quickSort=(arr) =>{
  
  sortArray(arr,0,arr.length-1)
  
}


console.log('before sorting',arr)
quickSort(arr)

console.log('after sorting' ,arr)