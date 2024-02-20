// ProductForm.js
import React, { useState } from "react";

function ProductForm({ addProduct }) {
  const [formData, setFormData] = useState({
    shoeName: "",
    description: "",
    price: "",
    quantity: { L: 0, M: 0, S: 0 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("quantity")) {
      const size = name.slice(-1); // Extract the size from the name attribute
      setFormData({
        ...formData,
        quantity: {
          ...formData.quantity,
          [size]: parseInt(value), // Ensure the value is parsed as an integer
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({
      shoeName: "",
      description: "",
      price: "",
      quantity: { L: 0, M: 0, S: 0 },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="shoeName"
          placeholder="Shoe Name"
          value={formData.shoeName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantityL"
          placeholder="Quantity (L)"
          value={formData.quantity.L}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantityM"
          placeholder="Quantity (M)"
          value={formData.quantity.M}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantityS"
          placeholder="Quantity (S)"
          value={formData.quantity.S}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
