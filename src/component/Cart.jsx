import React from 'react';

const Cart = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
                {/* Cart items */}
                <div className="flex flex-col space-y-4">
                    {/* Cart item */}
                    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <img src="product-image.jpg" alt="Product" className="w-16 h-16 rounded-full" />
                            <div>
                                <h2 className="text-lg font-medium">Product Name</h2>
                                <p className="text-gray-500">Price: $10</p>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                    {/* Add more cart items here */}
                </div>
                {/* Cart total */}
                <div className="flex items-center justify-between mt-8">
                    <h2 className="text-lg font-medium">Total:</h2>
                    <p className="text-2xl font-bold">$30</p>
                </div>
                {/* Checkout button */}
                <button className="mt-8 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;