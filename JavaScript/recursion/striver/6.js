// reverse an array using recursion 

let arr =[1,2,3,4,5,6]

const revArr =(left ,right ,arr) =>{

    if(left>right) {
        return
    }
    [arr[left],arr[right]] = [arr[right],arr[left]]
    revArr(left+1,right-1,arr)
}

function main(arr) {

    revArr(0,arr.length-1 ,arr)

    return arr



}



console.log(main(arr))