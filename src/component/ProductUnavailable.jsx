import React, { useState, useEffect } from 'react';

const ProductUnavailable = (props) => {
  const [product, setProduct] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then((response) => response.json())
      .then((responseProduct) => {
        const nonAvailableProducts = responseProduct.filter((product) => product.isAvailable === false);
        setProduct(nonAvailableProducts);
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

  const handleBackButton = () => {
    setSingleProduct(null);
  };

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={handleToggleContent}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 mb-4"
      >
        {showContent ? 'Hide Garbage' : 'Show Garbage'}
      </button>
      {showContent && (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-800 my-6">Unavailable Products</h2>
          {singleProduct ? (
            <div className="max-w-2xl rounded overflow-hidden shadow-lg m-4 bg-white">
              <img className="w-full h-64 object-cover" src={singleProduct.image} alt={singleProduct.title} />
              <div className="p-6">
                <div className="font-bold text-3xl mb-4 text-gray-800">{singleProduct.title}</div>
                <p className="text-gray-700 text-lg mb-4">{singleProduct.description}</p>
                <div className="text-xl font-semibold text-gray-800 mb-4">Price: ${singleProduct.price}</div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleBackButton}
                >
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
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </>
      )}
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

export default ProductUnavailable;
