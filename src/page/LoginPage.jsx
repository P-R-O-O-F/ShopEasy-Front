import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LoginForm from "../component/LoginForm";
import Inscription from "../component/Inscription";

const LoginPage = () => {

    return(
        <>
        <Header />
        <h1>Login Page</h1>
        <LoginForm />
        <Inscription />
        <Footer />
        </>
    )

}

export default LoginPage;