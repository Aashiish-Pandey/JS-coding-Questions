// https://www.geeksforgeeks.org/longest-sub-array-sum-k/
// this will also work if array has negative elements also

// const arr =[2, 0, 0, 3] 
// let target =3


// let arr = [10, 5, 2, 7, 1, 9];
// let inSum = 15;

let arr = [1, 3, -1, -3, 2, 1, 6, 7]
let inSum = 2;

const findLongestSubArray =(arr,inSum)=>{

    const prefixMap = new Map()
    let sum =0
    let prefixSum =0
    let result =[]

  for(let i=0;i<arr.length;i++) {

    sum+=arr[i]
    prefixSum = sum-inSum
    if(prefixMap.has(prefixSum)) {

        let preIndex = prefixMap.get(prefixSum)
        result= result.length<i-preIndex ?arr.slice(preIndex+1,i+1):result

    } else {

        if(!prefixMap.has(sum)) {
            prefixMap.set(sum,i)
        }
    }

  } 
  console.log(prefixMap)
  return result

}

console.log(findLongestSubArray(arr,inSum))
