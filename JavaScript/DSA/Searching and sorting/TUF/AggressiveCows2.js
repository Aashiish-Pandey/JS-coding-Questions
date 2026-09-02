// https://takeuforward.org/data-structure/aggressive-cows-detailed-solution

//  N = 6, k = 4, arr[] = {0,3,4,7,10,9}


// using Binary search

const arr = [0,3,4,7,10,9]
const cows =4

const canPlace =(minDistance,arr,cows) =>{

    let placedCows = 1
    let start =0

    for(let i=1;i<arr.length;i++) {

        if(arr[i]-arr[start]>=minDistance) {
            placedCows++
            start=i
        }

    }
    return placedCows>=cows

}

const findMinOfMax = (arr,cows)=>{

    arr.sort((a,b)=>a-b)

    let min = arr[0]
    let max = arr[arr.length-1]
    let mid
    let ans =0

    while(min<=max) {

        mid = Math.floor((min+max)/2)

        if(canPlace(mid ,arr,cows)) {
            ans =mid

            min=mid+1
        } else {
            max =mid-1
        }

    }
    return ans

}

console.log(findMinOfMax(arr,cows))