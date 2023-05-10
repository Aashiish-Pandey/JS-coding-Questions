const gp = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

gp.addEventListener("click", (e) => {
  alert("grandparent")
},true);
parent.addEventListener("click", (e) => {
  alert("parent")
});
child.addEventListener("click", (e) => {
  alert("child")
},true);
