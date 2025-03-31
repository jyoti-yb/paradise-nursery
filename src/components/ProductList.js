import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/store";
import "./ProductList.css"; // Add styles

const products = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent", img: "aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulent", img: "snake.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", price: 25, category: "Indoor", img: "fig.jpg" },
  { id: 4, name: "Pothos", price: 12, category: "Indoor", img: "pothos.jpg" },
  { id: 5, name: "Cactus", price: 8, category: "Succulent", img: "cactus.jpg" },
  { id: 6, name: "Fern", price: 18, category: "Tropical", img: "fern.jpg" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
