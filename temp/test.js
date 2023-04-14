let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 4000);
});

console.log(pr);

pr.then((data) => console.log(data));
console.log(pr);
