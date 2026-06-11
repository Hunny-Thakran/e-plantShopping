import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    const item = cartItems.find(
      (item) => item.id === id
    );

    if (item.quantity === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                margin: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Item Total: $
                {item.price * item.quantity}
              </p>

              <button
                onClick={() =>
                  handleIncrement(item.id)
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  handleDecrement(item.id)
                }
              >
                -
              </button>
            </div>
          ))}

          <hr />

          <h2>
            Total Cart Amount: $
            {calculateTotalAmount()}
          </h2>
        </>
      )}
    </div>
  );
}

export default CartItem;
