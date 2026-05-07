import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">{product.emoji}</div>

      <div>
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
      </div>

      <button
        className="cart-btn"
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;