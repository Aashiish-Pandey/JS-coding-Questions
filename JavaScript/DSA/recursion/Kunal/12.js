// Find All Index
// Find First Index
// Find Last Index

const arr = [1, 2, 3,3,4,7, 7, 3];
const target =3;

const findIndex = (arr, target, index ,allIndex) => {

    console.log('All Index' ,allIndex);
  if (index === arr.length) {
    return allIndex
  }

  if (arr[index] === target) {
    allIndex.push(index)
  }
  return findIndex(arr, target, index + 1,allIndex);
 
}; 

console.log(findIndex(arr, target,0 ,[]));
