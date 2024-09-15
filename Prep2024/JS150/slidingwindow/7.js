// https://leetcode.com/problems/minimum-window-substring/
// Minimum Window Substring | Variable Size Sliding Window

let string1 = "ADOBECODEBANC";
let string2 = "ABC";
const getObj = (str) => {
  const obj = str.split("").reduce((acc, cv) => {
    if (cv in acc) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});

  return obj;
};
function findMinWindow(str1, str2) {
  let i = 0;
  let j = 0;
  let mapObj = getObj(str2);
  //{ A: 1, B: 1, C: 1 }
  let count = str2.length
  console.log(mapObj);
  let str =''
  let minLength=Infinity

  while (j < str1.length) {

    if(str1[j] in mapObj) {
        mapObj[str1[j]]--
        if( mapObj[str1[j]]===0) {
            count--
        }
        
    } 
    if(0<count) {
        j++

    } else if(count===0) {
        minLength =j-i+1<minLength?j-i+1:minLength
        str = str1.slice(i,j+1)
        while(count===0) {
            
            mapObj[str[i]] ++ 
            if(mapObj[str[i]]===1) {
                count++
            }
            i++
        }
        j++
        

    }

  }
  return [minLength,str]
}

console.log(findMinWindow(string1, string2));
