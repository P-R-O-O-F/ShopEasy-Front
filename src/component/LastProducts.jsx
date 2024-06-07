import React from 'react';

const LastProducts = () => {
    const products = [
        {
            id: 1,
            title: 'Product 1',
            description: 'Description 1',
            image: 'https://placehold.co/200',
            price: 9.99,
            isPublished: true,
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'Description 2',
            image: 'https://placehold.co/200',
            price: 19.99,
            isPublished: false,
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'Description 3',
            image: 'https://placehold.co/200',
            price: 29.99,
            isPublished: true,
        },
        {
            id: 4,
            title: 'Product 4',
            description: 'Description 4',
            image: 'https://placehold.co/200',
            price: 39.99,
            isPublished: false,
        },
        {
            id: 5,
            title: 'Product 5',
            description: 'Description 5',
            image: 'https://placehold.co/200',
            price: 49.99,
            isPublished: false,
        },
        {
            id: 6,
            title: 'Product 6',
            description: 'Description 6',
            image: 'https://placehold.co/200',
            price: 59.99,
            isPublished: true,
        },
    ];

    return (
        <div>
            {products.map((product) => (
                product.isPublished ? (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                ) : null
            ))}
        </div>
    );
};

export default LastProducts;