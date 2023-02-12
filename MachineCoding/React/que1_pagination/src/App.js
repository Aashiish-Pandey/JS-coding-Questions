import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Products from "./Components/Products";
import "./App.css";

function App() {
  let URL = "https://dummyjson.com/products?limit=100";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(items.length / 10);

  async function getData() {
    setLoading(true);
    let jsonData = await fetch(URL);
    let data = await jsonData.json();
    setItems(data.products);
    setLoading(false);
    console.log(data.products);
  }
  function pageHandler(page) {
    if (page !== 0 && page <= totalPage) {
      setPage(page);
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
        <div className="products">
        <Products items={items.slice(page * 10 - 10, page * 10)} />
        </div>
        <div className="pagination">
        <span className={page===1? "Pagination__Disabled":""} onClick={() => pageHandler(page - 1)}>◀️</span>
        {[...Array(totalPage)].map((_, pageNo) => (
          <span onClick={() => setPage(pageNo + 1)}>
            {pageNo + 1}
          </span>
        ))}
        <span className={totalPage===page? "Pagination__Disabled":""} onClick={() => pageHandler(page + 1)}>▶️</span>
        </div>
      </div>
      
    );
  }
}

export default App;
