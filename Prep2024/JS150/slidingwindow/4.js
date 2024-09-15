// https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
// https://www.youtube.com/watch?v=xFJXtB5vSmM&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=7


const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
const k =3


function findMaxSum(arr,k) {

    let i=0
    let j=0
    let sum=0
    let maxSum =0

    while(j<arr.length) {
        sum+=arr[j]

        if(j-i+1<k) {
            j++
        } else if(j-i+1===k) {
            maxSum= maxSum<sum?sum:maxSum
            sum-=arr[i]
            i++
            j++
        }
    }

    return maxSum

}


console.log(findMaxSum(arr,k))