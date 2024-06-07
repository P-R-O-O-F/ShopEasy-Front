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
    <div className="flex flex-wrap justify-center">
      {singleProduct ? (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-200">
      <img className="w-full" src={singleProduct.image} alt={singleProduct.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-stone-950">{singleProduct.title}</div>
            <p className="text-gray-700 text-base ">{singleProduct.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {singleProduct.price}</span>
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteProduct(singleProduct.id)}>Delete</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleBackButton}>Back to list</button>
        </div>
      ) : product ? (
        product.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-200" onClick={(event) => handleClickProduct(event, product.id)}>
          <img className="w-full" src={product.image} alt={product.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-stone-950">{product.title}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Product;
