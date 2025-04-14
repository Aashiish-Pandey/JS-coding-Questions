// Example1  Polling with delay

const checkCondition = () => {
  let retryCount = 0;
  const maxRetryCount = 5;

  const fetchData = () => {
    setTimeout(() => {
      console.log("Fetching  data ...Attempt", retryCount + 1);
      // simultate a network request
      const success = Math.random() > 0.7; //  30% chance of success
      if (!success && retryCount < maxRetryCount) {
        retryCount++;
        fetchData();
      } else {
        console.log(
          success ? "Data Fetched" : "Failed after multiple Attempts"
        );
      }
    }, Math.pow(2, retryCount) * 1000);
  };

  fetchData();
};

checkCondition();
