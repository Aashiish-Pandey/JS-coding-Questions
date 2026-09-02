// Level 3 - Statement Before AND After

const fun = (n) => {
  if (n === 0) {
    return;
  }

  console.log("before", n);
  fun(n - 1);
  console.log("after", n);
};

fun(3);
