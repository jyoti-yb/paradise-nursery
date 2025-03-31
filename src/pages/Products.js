import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Aloe Vera", desc: "A medicinal plant", price: 10, img: "aloe.jpg" },
  { id: 2, name: "Lavender", desc: "An aromatic plant", price: 15, img: "lavender.jpg" }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Our Plants</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
