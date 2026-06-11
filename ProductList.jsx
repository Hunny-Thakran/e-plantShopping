import React, { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Rose",
    price: 18,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Jasmine",
    price: 22,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 12,
    category: "Medicinal Plants",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Tulsi",
    price: 10,
    category: "Medicinal Plants",
    image: "https://via.placeholder.com/200",
  },
];

function ProductList() {
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (id) => {
    setAddedItems([...addedItems, id]);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
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
                    width="200"
                    height="200"
                  />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant.id)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
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