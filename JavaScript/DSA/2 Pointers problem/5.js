// Minimum Difference Between Highest And Lowest of K Scores
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

let arr =[9,4,1,7]
let k=2


const minimumDifference = function(nums, k) {

    nums.sort((a,b)=>a-b)

    return nums[nums.length-1]-nums[nums.length-k]
    
};

console.log(minimumDifference(arr,k))