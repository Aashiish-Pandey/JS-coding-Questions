function Product({ items }) {
  return (
    <>
      {items.map((product) => {
        return (
          <span key={product.id} className="product__single">
            <img src={product.thumbnail} alt={product.description} />
            <span>{product.title}</span>
          </span>
        );
      })}
    </>
  );
}

export default Product;
