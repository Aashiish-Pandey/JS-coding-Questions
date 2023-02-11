import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Products from "./Components/Products";

function App() {
  let URL = "https://dummyjson.com/products?limit=100";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(items.length/10)

  async function getData() {
    setLoading(true);
    let jsonData = await fetch(URL);
    let data = await jsonData.json();
    setItems(data.products);
    setLoading(false);
    console.log(data.products);
  }
  function pageHandler(page) {
    if(page!==0 && page <=totalPage) {
      setPage(page)
    }

  }

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>

        <Products items={items.slice(page * 10 - 10, page * 10)} />
        <button onClick={()=>pageHandler(page-1)}>◀️</button>
        {[...Array(totalPage)].map((_, pageNo) => (
          <button style={{margin:20}} onClick={()=>setPage(pageNo+1)}>{pageNo + 1}</button>
        ))}
         <button onClick={()=>pageHandler(page+1)}>▶️</button>
      </div>
    );
  }
}

export default App;
