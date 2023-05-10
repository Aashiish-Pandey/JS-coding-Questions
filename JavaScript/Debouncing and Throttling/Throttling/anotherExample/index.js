// Debounce

function getData() {
  console.log("fetching data...");
}

function throttle(func, delay) {
  let isCalled = true;

  return function () {
    if (isCalled) {
      func.apply(this, arguments);
      isCalled = false;
      setTimeout(() => {
        isCalled = true;
      }, delay);
    }
  };
}

const optimizedSayHello = throttle(getData, 1000);

const textField = document.querySelector("input");
textField.addEventListener("keyup", optimizedSayHello);
