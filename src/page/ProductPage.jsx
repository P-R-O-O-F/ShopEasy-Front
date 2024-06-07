import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductTemplate from "../component/ProductTemplate";
import Product from "../component/Product";
import CreateProduct from "../component/CreateProduct";

const ProductPage = () => {

    return(
        <>
        <Header />
        <h1>Product Page</h1>
        <ProductTemplate />
        <Footer />
        </>
    )
}

export default ProductPage;