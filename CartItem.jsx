import React from "react";

function CartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) {
  return (
    <div
      className="cart-item"
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
        height="120"
      />

      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <div>
        <button onClick={() => onIncreaseQuantity(item.id)}>
          +
        </button>

        <button
          onClick={() => onDecreaseQuantity(item.id)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
      </div>

      <p>Total: ${item.price * item.quantity}</p>

      <button
        onClick={() => onRemoveItem(item.id)}
        style={{ marginTop: "10px" }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;