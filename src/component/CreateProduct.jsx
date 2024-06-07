import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CreateProduct = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      title,
      description,
      price: parseInt(price),
      color,
      imageUrl,
    };

    const token = Cookies.get('access_token');

    fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onProductsUpdated();
        setShowForm(false);
      })
      .catch((error) => console.error('Error:', error));
    console.log(product);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Create New Product
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 font-bold mb-2">
              Color:
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">
              ImageUrl:
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateProduct;
