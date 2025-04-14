/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 */

let nums=[0,1,0,3,12]
var moveZeroes = function(nums) {
    let i=0
    let j=-1
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===0) {
            j=i
            break

        }
    }
    // if(nums.length===1 || j===-1) return 

    for(let i=j+1;i<nums.length;i++) {
        if(nums[i]!==0) {
            console.log('nums1',nums);
            let temp= nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            console.log('nums2' ,nums)
            j++
        }
    }
    return nums
    
}

console.log(moveZeroes(nums))