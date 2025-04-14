// https://www.geeksforgeeks.org/bubble-sort-algorithm/

const arr = [ 64, 34, 25, 12, 22, 11, 90 ]
const n=arr.length

const BubbleSort =(arr,n)=>{
    for(let i=0;i<n;i++) {
        let swap = false

        for(let j=0;j<n-1-i;j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
                swap =true
            }
        }
        if(!swap) {
            break
        }
    }
    return arr

}


console.log(BubbleSort(arr ,n))