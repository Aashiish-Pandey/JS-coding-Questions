// count  zeroo

const countZero = (num, count) => {
  if (num === 0) {
    return count;
  }
  count = num % 10 == 0 ? ++count : count;
  return countZero(Math.floor(num / 10), count);
};

console.log(countZero(30204, 0));
