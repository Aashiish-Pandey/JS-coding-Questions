// 🙄😶😑Need to learn closure more , why let flag = true; is not getting updated in this case

let expensive = () => {
  console.log("Expensive");
};

const throttle = (func, limit) => {
  let flag = true;
  console.log(flag);
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      console.log(flag);
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterExpensive = throttle(expensive, 4000);

window.addEventListener("resize", betterExpensive);
