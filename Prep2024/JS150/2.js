// 2: remove duplicate

const arr = [1, 2, 2, 2, 4, 5, 5, 6, 7, 7, 7, 8];

function removeDuplicate(arr) {
  return arr.reduce((acc, cv) => {
    if (!acc.includes(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []);
}

console.log(removeDuplicate(arr));
