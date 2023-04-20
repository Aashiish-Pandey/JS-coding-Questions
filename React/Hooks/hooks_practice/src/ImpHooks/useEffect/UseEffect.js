import React, { useEffect, useState } from "react";

function UseEffect() {
   // 😎😎😎😎 example1:
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  // return (
  //   <>
  //     <div>
  //       <button onClick={() => setResourceType("posts")}>Posts</button>
  //       <button onClick={() => setResourceType("users")}>Users</button>
  //       <button onClick={() => setResourceType("comments")}>Comments</button>
  //     </div>
  //     <h1>{resourceType}</h1>
  //     {items.map((item) => {
  //       return <pre>{JSON.stringify(item)}</pre>;
  //     })}
  //   </>
  // );

  // 😎😎😎😎 example2:

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return ()=>{
      window.removeEventListener("resize",handleResize)
    }
  },[]);
  return <div>{windowWidth}</div>;
}

export default UseEffect;
