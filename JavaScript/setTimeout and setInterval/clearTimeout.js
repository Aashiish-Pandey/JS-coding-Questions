// Cancel the latest timeout before it runs.
// Run: node "clearTimeout.js"

// setTimeout runs ONCE after delay. Store the id so you can clear it.
let timerId = setTimeout(() => {
  console.log("This will be cleared before execution.");
}, 5000);

setTimeout(() => {
  clearTimeout(timerId);
  console.log("Timeout cleared before execution.");
}, 2000);

// Expected:
// ~2s  -> "Timeout cleared before execution."
// never -> "This will be cleared before execution."
