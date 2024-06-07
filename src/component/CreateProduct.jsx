import React, { useState } from "react";

const CreateProduct = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      title,
      description,
      price: parseFloat(price),
      color,
      image,
    };

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onProductsUpdated();
        setShowForm(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Create New Product</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price:</label>
          <br />
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="color">Color:</label>
          <br />
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br />
          <label htmlFor="image">Image:</label>
          <br />
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};

export default CreateProduct;
