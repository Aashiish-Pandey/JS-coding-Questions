// https://takeuforward.org/data-structure/aggressive-cows-detailed-solution

//  N = 6, k = 4, arr[] = {0,3,4,7,10,9}


const arr = [0,3,4,7,9,10]
const cows =4
const N=6


const canPlace =(minDist ,arr,cows)=>{

    let placedCows =1
    let start =0
    for(let i=1;i<arr.length;i++) {

        if(arr[i]-arr[start]>=minDist) {
            placedCows++
            start=i
        }

    }
    return placedCows>=cows
    
}
const findMinMaxDistance =(arr ,cows)=>{

    arr.sort((a,b)=>a-b)

    const maxDistance = arr[N-1]-arr[0]
    let max =0
    for(let i=1;i<=maxDistance;i++) {

       if( canPlace(i,arr,cows)) {
        max =i
       }
    }
    return max

}

console.log(findMinMaxDistance(arr,cows))