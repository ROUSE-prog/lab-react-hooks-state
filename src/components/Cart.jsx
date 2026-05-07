import React from "react";

function Cart({ cart }) {
  return (
    <aside className="cart-panel">
      <p className="eyebrow">Checkout</p>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <p className="cart-item" key={`${item.id}-${index}`}>
              {item.emoji} {item.name} is in your cart
            </p>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Cart;