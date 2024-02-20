import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>{product.shopName}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            {/* Pass product and size to addToCart function */}
            <button onClick={() => addToCart(product, "L")}>
              Add to Cart (L)
            </button>
            <button onClick={() => addToCart(product, "M")}>
              Add to Cart (M)
            </button>
            <button onClick={() => addToCart(product, "S")}>
              Add to Cart (S)
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
