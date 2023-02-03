const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

function check(word) {
  if (word.length > 6) {
    return true;
  } else return false;
}

// const newWords = words.filter(word=>word.length>6)
const newWords = words.filter(check);
console.log(newWords);
