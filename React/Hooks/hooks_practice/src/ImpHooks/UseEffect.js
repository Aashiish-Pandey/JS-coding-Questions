import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("Hello useEffect"));

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default UseEffect;
