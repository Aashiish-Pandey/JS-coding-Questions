function Product({ items }) {
  return (
    <>
      {items.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.id}</h1>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.description} />
            
          </div>
        );
      })}
    </>
  );
}

export default Product;
