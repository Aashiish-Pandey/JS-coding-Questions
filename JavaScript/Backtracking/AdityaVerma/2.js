// // Permutation of Strings using backtracking

// const arr=[1,2,3]


// let dupObj ={}

// const solve =(arr,start,ans)=>{
//     if(start===arr.length-1) {
//         ans.push(arr)
//         console.log(arr)
//         return
//     }

//     for(let i= start;i<arr.length-1;i++) {

//         [arr[start],arr[i]] =[arr[i],arr[start]]
//         solve(arr,start+1,ans)
//         [arr[i],arr[start]]=[arr[start],arr[i]]
//     }
// }

// const main =(arr)=>{
//     let ans =[]
//     let start=0

//     solve(arr,start,ans)
//     return ans

// }


// console.log(main(arr))