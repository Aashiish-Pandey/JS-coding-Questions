const que ={

    // This Interview question was asked in Atlassian's frontend interview. 
    // The problem statement reads as Given a list of timestamps and commodity prices, 
     // find out highest commodity price at given timestamp. timestamps are
    //  not necessarily in sorted order, there can be multiple entries for
    //  a timestamp as well.Followup: after each timestamp, commodity price entry,
    //  we are putting a checkpoint, given a timestamp and checkpoint find maximum
    //  commodity prices till then. 
}
// // Part 1

// const Store = function() {

//     this.storedPrice = new Map()

//     this.add = function(timeStamp ,price) {

//         if(this.storedPrice.has(timeStamp)) {
//             this.storedPrice.get(timeStamp).push(price)
//         } else {
//             this.storedPrice.set(timeStamp,[price])
//         }
//     }
//     this.getMax = function(timeStamp) {
//         return Math.max(...this.storedPrice.get(timeStamp))
//     }
// }

// const myStore = new Store()
// myStore.add(1,100)
// myStore.add(3,200)
// myStore.add(1,200)
// myStore.add(5,10000)
// myStore.add(7,900)
// myStore.add(5,200)

// console.log(myStore.storedPrice)

// console.log(myStore.getMax(5))



//  Part 2 

const Store = function() {

    this.storedPrice = new Map()
    this.max =-Infinity
    this.checkpoint=1000

    this.add = function(timeStamp ,price) {

        if(this.storedPrice.has(timeStamp)) {
            this.storedPrice.get(timeStamp).prices.push(price)
        } else {
            this.storedPrice.set(timeStamp,{prices:[price] ,checkpoint:this.checkpoint++})
        }
    }
    this.getMax = function(timeStamp) {
        return Math.max(...this.storedPrice.get(timeStamp).prices)
    }
    this.getMaxTillCheckPoint = function(check) {


        for([key ,value] of this.storedPrice) {


            const{prices ,checkpoint}= value
            let maxPrice = Math.max(...prices)
            this.max = maxPrice>this.max ?maxPrice:this.max
            if(check===checkpoint)  {
                break
            }

        }
        return this.max

    }
}

const myStore = new Store()
myStore.add(1,100)
myStore.add(3,200)
myStore.add(1,200)
myStore.add(5,10000)
myStore.add(7,900)
myStore.add(5,200)

console.log(myStore.storedPrice)

console.log(myStore.getMax(5))
console.log(myStore.getMaxTillCheckPoint(1001))