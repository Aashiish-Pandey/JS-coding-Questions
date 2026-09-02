// Longest Substring With Without Repeating Characters | Variable Size Sliding Window
// https://leetcode.com/problems/longest-substring-without-repeating-characters/



// solution 1: 

let str = "pwwkew";

const findLongestSubstring = (str) => {
  let i = 0;
  let j = 0;
  let maxLength = 0;
  let startWindow = 0;
  let endWindow =0
  let freqMap = new Map();
  while (j < str.length) {
    let char = str[j];
    let ws = j - i + 1;

    if (freqMap.has(char)) {
      freqMap.set(char, freqMap.get(char) + 1);
    } else {
      freqMap.set(char, 1);
    }
    if ((ws === freqMap.size)) {
      if (ws > maxLength) {
        endWindow=j
        startWindow =i
      }
      j++;
    } else {
      while (ws > freqMap.size) {

        freqMap.set(str[i],freqMap.get(str[i])-1)
        if(freqMap.get(str[i])==0) {
            freqMap.delete(str[i])
        }
        i++
        ws =j-i+1
      }
      j++
    }
  }
  return {maxLength:endWindow-startWindow+1 ,maxStr:str.slice(startWindow,endWindow+1)}
};

console.log(findLongestSubstring(str));



// let str = "pwwkew";

// const longestSubstr =(str)=>{
//     let i=0
//     let j=0
//     let longSubstr =''
//     let start =0
//     const patMap = new Map()

//     while(j<str.length) {

//             let char = str[j]
//             if(patMap.has(char)) {
//                 patMap.set(char ,patMap.get(char)+1)
//             } else {
//                 patMap.set(char ,1)
//             }
//             if(j-i+1)

//     }

// }


// console.log(longestSubstr(str))

