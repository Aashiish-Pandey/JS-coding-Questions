// class Prommise {
//     constructor(executerFn) {
//         executerFn(this.resolve,this.reject)
//     }
// }


function  init() {
    const executerFn = (resolve,reject)=>{

        resolve(10)
    }
    return new Promise(executerFn)
}

const instance = init()
instance.then(v=>{
    console.log('value is:' ,v)
})