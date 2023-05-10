function print(name) {
  console.log(name);
}

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const optimizedFunc = debounce(print, 300);

const inputField = document.querySelector(".inputbox");
inputField.addEventListener("keyup", ()=>{
    optimizedFunc("ashish")
});
