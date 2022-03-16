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
                <Route path="/" element={<Navbar variant />} >
                    <Route index element={<Home />} />
                </Route>
                <Route path="/product-listing/:category/:style" element={<Navbar />} >
                    <Route index element={<ProductListing />} />
                </Route>
                <Route path="/product-details/:category/:style/:type/:color" element={<Navbar />} >
                    <Route index element={<ProductDetails />} />
                </Route>
            </Routes>
            <Footer /> 
        </div>
    )
}

export default App
