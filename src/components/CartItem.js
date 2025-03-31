import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <img src={item.img} alt={item.name} width="50" />
      <h3>{item.name}</h3>
      <p>${item.price} x {item.qty} = ${item.price * item.qty}</p>
      <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
      <button onClick={() => removeFromCart(item.id)}>Delete</button>
    </div>
  );
};

export default CartItem;
