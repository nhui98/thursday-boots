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
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-listing" element={<ProductListing />} />
                <Route path="/product-listing/mens/:style" element={<ProductListing />} />
                <Route path="/product-listing/womens/:style" element={<ProductListing />} />
                <Route path="/product-details/:id" element={<ProductDetails /> } />
            </Routes>
            <Footer /> 
        </div>
    )
}

export default App
