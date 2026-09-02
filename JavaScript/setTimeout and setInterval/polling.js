// Nested setTimeout — Polling with exponential backoff
// Run: node polling.js
//
// Nested setTimeout: the callback schedules the next timeout only on failure.
// Delay grows: 1s, 2s, 4s, 8s, 16s  →  Math.pow(2, retryCount) * 1000
// Use when the server is down so you don't hammer it at a fixed interval.

let retryCount = 0;

function fetchData() {
  setTimeout(() => {
    console.log("Fetching data... Attempt:", retryCount + 1);
    // Simulate a network request
    const success = Math.random() > 0.7; // 30% chance of success

    if (!success && retryCount < 5) {
      retryCount++;
      fetchData(); // nest: next attempt after a longer wait
    } else {
      console.log(
        success ? "Data fetched!" : "Failed after multiple attempts."
      );
    }
  }, Math.pow(2, retryCount) * 1000);
}

fetchData();
