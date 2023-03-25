// https://www.youtube.com/watch?v=3KJI1WZGDrg&t=1490s
// https://javascript.info/event-delegation

document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target);
  if ((e.target.tagName = "LI")) {
    window.location.href = "/" + e.target.id;
  }
});
