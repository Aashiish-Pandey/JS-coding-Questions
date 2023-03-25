// https://www.youtube.com/watch?v=3KJI1WZGDrg&t=1490s
// https://javascript.info/event-delegation
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

document.querySelector("#form").addEventListener("click", (e) => {

  console.log(e.target.dataset.uppercase)
  if (e.target.dataset.uppercase!=undefined) {
    console.log(e);

    e.target.value = e.target.value.toUpperCase();
  } else {
    console.log(e)
  }
});
