import React, { useState } from "react";

import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/Products/ProductList";
import Cart from "./Components/Cart/Cart";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product, size) => {
    const updatedProduct = { ...product, size }; // Add the size to the product
    setCart([...cart, updatedProduct]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
      {/* Render Cart component here */}
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
}

export default App;
