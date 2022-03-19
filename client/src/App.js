import React from "react"
import { Routes, Route } from "react-router-dom"

import "./App.scss"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import ProductDetails from "./pages/product-details/product-details"
import ProductListing from "./pages/product-listing/product-listing"
import Delivery from "./pages/checkout - delivery/delivery"

const PageWithFooter = props => {
    return (
        <>
            {props.children}
            <Footer />
        </>
    )
}

const App = () => {
    return (
        <div className="thursday">
            <Routes>
                <Route path="/" element={<Navbar variant />} >
                    <Route index element={<PageWithFooter><Home /></PageWithFooter>} />
                </Route>
                <Route path="/product-listing/:category/:type" element={<Navbar />} >
                    <Route index element={<PageWithFooter><ProductListing /></PageWithFooter>} />
                </Route>
                <Route path="/product-details/:category/:style/:type/:color" element={<Navbar />} >
                    <Route index element={<PageWithFooter><ProductDetails /></PageWithFooter>} />
                </Route>
                <Route path="/checkout/delivery" element={<Delivery />} />
            </Routes>
        </div>
    )
}

export default App
