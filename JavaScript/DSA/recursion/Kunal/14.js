// Remove all d from the string 

// 1: Approch 1

// const str ='abbacdacd'

// const helper =(str,start)=>{
  
//   if(start===str.length) {
//     return str
//   }
  
//   if(str[start]==='d') {
    
//     return helper(str.replace(str[start],''),start)
//   } else {
//     return helper(str,start+1)
//   }
// }

// const removeAllD =(str)=>{
  
//   return helper (str,0)
  
// }

// console.log(removeAllD(str))



// Approch2



// const str ='abbacdacdscsdcnsd01120320'



// const removaAllD =(str,ans)=>{
//   if(str==='') {
//     return ans
//   }
  
//   if(str[0]!=='d') {
//    ans= ans+str[0]
    
   
    
//   }
//    return removaAllD(str.slice(1) ,ans)
  
// }


// console.log(removaAllD(str,''))


// Approch 3:




