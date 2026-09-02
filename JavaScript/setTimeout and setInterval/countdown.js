// Countdown with recursive setTimeout (not setInterval).
// Next tick is scheduled only after the current tick finishes.
// Run: node "countdown.js"

function startCountdown(seconds) {
  function tick() {
    if (seconds > 0) {
      console.log(`Time left: ${seconds} seconds`);
      seconds--;
      timerId = setTimeout(tick, 1000);
    } else {
      console.log("Time's up!");
    }
  }

  let timerId = setTimeout(tick, 1000);

  // Optional: return a stop handle for interviews / UI cancel button
  return () => clearTimeout(timerId);
}

const stop = startCountdown(5);

// Uncomment to cancel after 2s:
// setTimeout(stop, 2000);
