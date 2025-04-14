//Pattern Print

const printPattern = (row, col) => {
  if (row === 0) {
    return;
  }

  if (col < row) {
    console.log(" * ");
    printPattern(row, col + 1);
  } else {
    console.log();
    printPattern(row - 1, 0);
  }
};

console.log(printPattern(4, 0));
