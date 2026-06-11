import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/150",
    category: "Indoor Plants",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    image: "https://via.placeholder.com/150",
    category: "Indoor Plants",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 12,
    image: "https://via.placeholder.com/150",
    category: "Medicinal Plants",
  },
  {
    id: 4,
    name: "Tulsi",
    price: 10,
    image: "https://via.placeholder.com/150",
    category: "Medicinal Plants",
  },
  {
    id: 5,
    name: "Rose",
    price: 18,
    image: "https://via.placeholder.com/150",
    category: "Flowering Plants",
  },
  {
    id: 6,
    name: "Jasmine",
    price: 16,
    image: "https://via.placeholder.com/150",
    category: "Flowering Plants",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      <h1>Paradise Nursery</h1>

      <div
        style={{
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        Cart Items: {totalQuantity}
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "15px",
                    width: "220px",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
