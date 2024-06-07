import React from 'react';
import Header from '../component/Header';
import Cart from '../component/Cart';
import Footer from '../component/Footer';
import withAuth from '../hoc/withAuth';

const CartPage = () => {
    return (
        <div>
            <Header />
            <Cart />
            <Footer />
        </div>
    );
};

export default withAuth(CartPage);