import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LoginForm from "../component/LoginForm";
import LoginFormMail from "../component/LoginFormMail";
import Inscription from "../component/Inscription";
import AuthPage from "../component/AuthPage";

const LoginPage = () => {

    return(
        <>
        <Header />
        <AuthPage />
        <Footer />
        </>
    )

}

export default LoginPage;