import React from "react"
import "./App.scss"
import Footer from "./components/footer/footer"

import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import ProductDetails from "./pages/product-details/product-details"
import ProductListing from "./pages/product-listing/product-listing"

const App = () => {
    return (
        <div className="thursday">
            <Navbar />
            {/* <Home /> */}
            {/* <ProductListing /> */}
            <ProductDetails />
            <Footer />
        </div>
    )
}

export default App
