import React, { useState } from "react";

function UseState() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default UseState;
