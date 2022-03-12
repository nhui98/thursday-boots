import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.scss"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import ProductDetails from "./pages/product-details/product-details"
import ProductListing from "./pages/product-listing/product-listing"

const App = () => {
    return (
        <div className="thursday">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
            {/* <Navbar />
            <Home />
            <ProductListing />
            <ProductDetails />*/}
            <Footer /> 
        </div>
    )
}

export default App
