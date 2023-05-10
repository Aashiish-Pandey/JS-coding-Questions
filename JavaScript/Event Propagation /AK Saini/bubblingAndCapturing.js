// https://www.youtube.com/watch?v=aVSf0b1jVKk&t=529s
// https://javascript.info/bubbling-and-capturing
// https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    alert("grand Parent Clicked");
    // e.stopPropagation();
  },
  true // capturing
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    alert("Parent clicked");
    // e.stopPropagation();
  },
  false // Bubbling
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    alert("child clicked");
    // e.stopPropagation();
  },
  true // capturing
);
