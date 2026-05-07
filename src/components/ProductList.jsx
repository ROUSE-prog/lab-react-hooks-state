import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: "$1.25", emoji: "🍎" },
  { id: 2, name: "Milk", category: "Dairy", price: "$4.50", emoji: "🥛" },
  { id: 3, name: "Bread", category: "Bakery", price: "$3.25", emoji: "🍞" },
];

function ProductList({ selectedCategory, setSelectedCategory, addToCart }) {
  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory);

  return (
    <section className="products-panel">
      <div className="section-header">
        <div>
          <p className="eyebrow">Catalog</p>
          <h2>Products</h2>
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="NonExistent">NonExistent</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="empty-message">No products available</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;