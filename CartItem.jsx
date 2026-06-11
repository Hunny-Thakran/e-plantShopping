import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#4CAF50",
        color: "white",
      }}
    >
      <h2>Paradise Nursery</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{ color: "white" }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{ color: "white" }}
        >
          Plants
        </Link>

        <Link
          to="/cart"
          style={{ color: "white" }}
        >
          Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
