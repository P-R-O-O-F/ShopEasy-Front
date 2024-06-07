import React, { useState } from "react";
import { useEffect } from "react";
import "./Product.css";

const Product = (props) => {
  const [product, setProduct] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
  fetch("http://localhost:8000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((responseProduct) => {
      const availableProducts = responseProduct.filter(product => product.isAvailable);
      setProduct(availableProducts);
    })
    .catch((error) => setError(error));
}, [props.productsUpdated]);

  const handleClickProduct = (event, id) => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseProduct) => {
        setSingleProduct(responseProduct);
      });
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:8000/api/products/${id}`, {
        method: "PATCH",
      })
        .then((response) => {
          return response.json();
        })
        .then((responseProduct) => {
          // Handle the response from the server
        });
    }
  };

  const handleBackButton = () => {
    setSingleProduct(null);
  };

  return (
    <div>
      {singleProduct ? (
        <div className="product-card single-product">
          <button onClick={handleBackButton}>Back to list</button>
          <h1>{singleProduct.title}</h1>
          <h2>{singleProduct.description}</h2>
          <img src={singleProduct.image} alt={singleProduct.title} />
          <div className="product-details">
            <div className="product-price">
              <div>Price</div>
              <div>{singleProduct.price}</div>
            </div>
          </div>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => handleDeleteProduct(singleProduct.id)}
          >
            Delete
          </button>
        </div>
      ) : product ? (
        <div className="product-list">
          {product.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={(event) => handleClickProduct(event, product.id)}
            >
              <h1>{product.title}</h1>
              <h2>{product.description}</h2>
              <img src={product.image} alt={product.title} />
              <button
                style={{
                  backgroundColor: "red",
                  display: "flex",
                  align: "center",
                  justify: "center",
                }}
                onClick={() => handleDeleteProduct(singleProduct.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Product;
