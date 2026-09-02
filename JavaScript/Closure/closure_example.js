// Make a function to be  executed only once

const main = () => {
  let count = 0;
  return function () {
    if (!count) {
      console.log("called");
      count++;
    } else {
      console.log("Already called");
    }
  };
};


const once =main()
once()
once()
once()
