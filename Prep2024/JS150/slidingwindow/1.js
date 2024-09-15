// Maximum Sum Subarray of size K | Sliding Window

// Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
// https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

let arr = [2, 5, 1, 8, 2, 9];
let windowSize = 3;


const findMaxSum =(arr,ws)=>{

    let i=0
    let j=0
    let maxSum=0
    let sum =0
    while(j<arr.length) {

        sum+=arr[j]
        if(j-i+1<ws) {
           j++
        } else if(j-i+1===ws) {

            maxSum = maxSum<sum?sum:maxSum
            sum-=arr[i]
            i++
            j++
        }


    }
return maxSum

}


console.log(findMaxSum(arr,windowSize))