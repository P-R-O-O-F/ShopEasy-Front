import React, { useState } from "react";
import { useEffect } from "react";
import "./Product.css";

const ProductUnavailable = (props) => {
    const [product, setProduct] = useState(null);
    const [singleProduct, setSingleProduct] = useState(null);
    const [showContent, setShowContent] = useState(false); // New state variable
  
    useEffect(() => {
      fetch("http://localhost:8000/api/products")
        .then((response) => {
          return response.json();
        })
        .then((responseProduct) => {
          const nonAvailableProducts = responseProduct.filter(product => product.isAvailable === false);
          setProduct(nonAvailableProducts);
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

  const handleBackButton = () => {
    setSingleProduct(null);
  };

  const handleToggleContent = () => {
    setShowContent(!showContent); // Toggle the content visibility
  };

  return (
    <div>
      <button onClick={handleToggleContent}>
        {showContent ? 'Hide Garbage' : 'Show Garbage'}
      </button>
      {showContent && (
        <>
        <h2> Unavailable Product</h2>
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
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
    )}
        </>
      )}
    </div>
  );
};

export default ProductUnavailable;
