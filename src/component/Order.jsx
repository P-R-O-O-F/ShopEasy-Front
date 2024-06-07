import React, { useState } from 'react';

const Order = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const orders = [
        { id: 1, name: 'Order 1' },
        { id: 2, name: 'Order 2' },
        { id: 3, name: 'Order 3' }
    ];

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id} onClick={() => handleOrderClick(order)}>
                        {order.name}
                    </li>
                ))}
            </ul>

            {selectedOrder && (
                <div>
                    <h2>Selected Order</h2>
                    <p>{selectedOrder.name}</p>
                </div>
            )}
        </div>
    );
};

export default Order;