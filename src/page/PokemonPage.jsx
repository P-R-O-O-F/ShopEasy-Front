import React from "react";
import Header from "../component/Header";
import Pokemon from "../component/Pokemon";
import Footer from "../component/Footer";

const PokemonPage = () => {

    return(
        <>
        <Header />
        <h1>Pokemon Page</h1>
        <Pokemon />
        <Footer />
        </>
    )
}

export default PokemonPage;