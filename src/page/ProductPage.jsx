import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ProductTemplate from '../component/ProductTemplate';
import Product from '../component/Product';
import CreateProduct from '../component/CreateProduct';
import withAuth from '../hoc/withAuth';

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 my-6">Product Page</h1>
        <ProductTemplate />
      </div>
      <Footer />
    </>
  );
};

export default withAuth(ProductPage);
