import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Counter from "../component/Counter";

const CounterPage = () => {

    return(
        <>
        <Header />
        
        <div>
            <h1>Counter Page</h1>
            <Counter />
        </div>
        <Footer />
        </>
    )

}

export default CounterPage;