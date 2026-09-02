// LB 
// Given a list of timestamps and commodity prices, find out highest commodity price at
//  given timestamp. timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.Followup: after each timestamp, commodity price entry, we are putting a checkpoint, given a timestamp and checkpoint find maximum commodity prices till then.


const list = [
    {timeStamp:3 ,price :200},
    {timeStamp:1 ,price :100},
    {timeStamp:2 ,price :2000},
    {timeStamp:1 ,price :1000},
    {timeStamp:4 ,price :500},
    {timeStamp:5 ,price :10000},
    {timeStamp:3 ,price :3000},
]
const findhighestCommPrice =(list)=>{

    const listMap = new Map()

    list.forEach(({timeStamp,price})=>{

        if(listMap.get(timeStamp)) {
            if(listMap.get(timeStamp)<price)

            listMap.set(timeStamp,price)

        } else {
            listMap.set(timeStamp,price)

        }

    })

    console.log(listMap)

}


console.log(findhighestCommPrice(list))