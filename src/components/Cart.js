import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/store";
import { Link } from "react-router-dom";
import "./Cart.css"; // Add styles

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          ))}
          <h3>Total Items: {cart.totalQuantity}</h3>
          <h3>Total Price: ${cart.totalPrice}</h3>
          <button>Coming Soon</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
