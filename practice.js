let name = "Assh";

// let obj = {
//   name: "kya haal chal",
//   printname() {
//     console.log(this.name);
//   },
// };

function printName() {
  let name = "pandey";
  console.log(this)
  console.log(this.name);
  let inner = () => {
    // console.log(this);
    console.log(name);
  };

  inner();
}

printName();
