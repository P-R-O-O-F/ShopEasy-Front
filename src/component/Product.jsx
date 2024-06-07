import React, { useState, useEffect } from 'react';

const Product = (props) => {
  const [product, setProduct] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then((response) => response.json())
      .then((responseProduct) => {
        const availableProducts = responseProduct.filter((product) => product.isAvailable);
        setProduct(availableProducts);
      })
      .catch((error) => setError(error));
  }, [props.productsUpdated]);

  const handleClickProduct = (event, id) => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((response) => response.json())
      .then((responseProduct) => {
        setSingleProduct(responseProduct);
      });
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'PATCH',
      })
        .then((response) => response.json())
        .then((responseProduct) => {
          // Handle the response from the server
        });
    }
  };

  const handleBackButton = () => {
    setSingleProduct(null);
  };

  return (
    <div className="container mx-auto p-6">
      {singleProduct ? (
        <div className="max-w-2xl rounded overflow-hidden shadow-lg m-4 bg-white">
          <img className="w-full h-64 object-cover" src={singleProduct.image} alt={singleProduct.title} />
          <div className="p-6">
            <div className="font-bold text-3xl mb-4 text-gray-800">{singleProduct.title}</div>
            <p className="text-gray-700 text-lg mb-4">{singleProduct.description}</p>
            <div className="text-xl font-semibold text-gray-800 mb-4">Price: ${singleProduct.price}</div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={() => handleDeleteProduct(singleProduct.id)}>
              Delete
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleBackButton}>
              Back to list
            </button>
          </div>
        </div>
      ) : product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={(event) => handleClickProduct(event, product.id)}
            >
              <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
              <div className="p-6">
                <div className="font-bold text-xl mb-2 text-gray-800">{product.title}</div>
                <p className="text-gray-700 text-base mb-4">{product.description}</p>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => { event.stopPropagation(); handleDeleteProduct(product.id); }}>
                  Delete
                </button>
              </div>
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
