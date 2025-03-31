const ProductCard = ({ product, addToCart }) => {
    return (
      <div>
        <img src={product.img} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  