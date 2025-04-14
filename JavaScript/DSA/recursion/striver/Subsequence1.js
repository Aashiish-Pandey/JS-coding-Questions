// get all the susequnce of an array 
// using Backtracking approch

let arr=['a','b','c']


const helper =(startIndex,arr ,ans)=>{
    if(startIndex>=arr.length) {
        console.log(ans)
        return
    }
    ans.push(arr[startIndex])
    helper(startIndex+1 ,arr,ans)
    ans.pop()
    helper(startIndex+1,arr,ans)

}


const printSubsequence =(arr) =>{

    let ans =[]
    let startIndex =0

    helper(startIndex ,arr,ans)


}


printSubsequence(arr)