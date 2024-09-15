// sum of first n numbers (paramterized way)

let n=3


const sum =(n,total)=>{
    if(n===0) {
        console.log(total)
        return
    }
    sum(n-1,total+n)
}

function main(n) {

    let total =0
    sum(n,total)

}


console.log(main(n))