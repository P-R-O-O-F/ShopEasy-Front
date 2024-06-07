import React from 'react';

const Cart = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
                {/* Cart items */}
                <div className="flex flex-col space-y-6">
                    {/* Cart item */}
                    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="flex items-center space-x-6">
                            <img src="product-image.jpg" alt="Product" className="w-20 h-20 rounded-lg object-cover" />
                            <div>
                                <h2 className="text-xl font-semibold">Product Name</h2>
                                <p className="text-gray-600">Price: $10</p>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-700 transition duration-300">Remove</button>
                    </div>
                    {/* Add more cart items here */}
                </div>
                {/* Cart total */}
                <div className="flex items-center justify-between mt-10 border-t pt-4">
                    <h2 className="text-2xl font-semibold">Total:</h2>
                    <p className="text-3xl font-bold text-gray-800">$30</p>
                </div>
                {/* Checkout button */}
                <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700 transition duration-300">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
