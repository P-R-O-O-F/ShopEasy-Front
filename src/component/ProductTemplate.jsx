import React, { useState } from 'react';
import CreateProduct from './CreateProduct';
import Product from './Product';
import ProductUnavailable from './ProductUnavailable';

const ParentComponent = () => {
    const [productsUpdated, setProductsUpdated] = useState(false);

    const handleProductsUpdated = () => {
        setProductsUpdated(!productsUpdated);
    }

    return (
        <div>
            <CreateProduct onProductsUpdated={handleProductsUpdated} />
            <Product productsUpdated={productsUpdated} />
            <ProductUnavailable/>
        </div>
    );
}

export default ParentComponent;