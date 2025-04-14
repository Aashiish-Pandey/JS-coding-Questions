const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Rejected");
  }, 5000);});

const p3 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p3 Resolved')
    },5000)
})

const result = Promise.race([p1,p2,p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
