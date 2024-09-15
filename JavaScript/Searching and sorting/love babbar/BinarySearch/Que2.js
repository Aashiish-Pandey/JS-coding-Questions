//find total occurance of an element in a sorted array


const arr = [2, 4, 8, 99,100,100,100, 102, 105, 108];
let num = 100;

const firstOccurance =(arr , num)=>{
    
    let start =0
    let end= arr.length-1
    let firstOccr=-1
    while(start<=end) {

        let mid = Math.floor((start +end)/2)

        if(arr[mid]===num) {
            firstOccr=mid
            end=mid-1
        } else if(arr[mid]<num) {

            start =mid+1
        } else {
            end=mid-1
        }

    }
    return firstOccr
}

const lastOccurance =(arr,num)=>{

    let start =0
    let end = arr.length-1
    let last =-1
    let mid

    while(start<=end) {

        mid= Math.floor((start+end)/2)
        if(arr[mid]===num) {

            last= mid
            start=mid+1

        } else if(arr[mid]<num) {
            start=mid+1
        } else {
            end= mid-1
        }

    
    }

    return last
}


function findOccurance(arr ,num) {



    const first = firstOccurance(arr ,num)
    const last = lastOccurance(arr ,num)

    return {totalOccurance:last-first+1}




}

console.log(findOccurance(arr ,num))