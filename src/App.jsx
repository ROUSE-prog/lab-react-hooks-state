import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <main className={darkMode ? "app dark" : "app"}>
      <div className="app-shell">
        <section className="hero">
          <div>
            <p className="eyebrow">Fresh Market</p>

            <h1>Shop smarter for everyday essentials.</h1>

            <p className="subtitle">
              Browse fresh groceries, filter by category, and build your cart
              in seconds.
            </p>
          </div>

          <DarkModeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </section>

        <section className="layout">
          <ProductList
            selectedCategory={category}
            setSelectedCategory={setCategory}
            addToCart={addToCart}
          />

          <Cart cart={cart} />
        </section>
      </div>
    </main>
  );
}

export default App;