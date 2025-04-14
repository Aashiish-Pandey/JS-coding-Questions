const pr = new Promise((resolve,reject)=>{

    setTimeout(()=>{resolve("Resolved")},1000)
})
console.log('@type of' ,typeof pr,Object.prototype.toString.call(pr))