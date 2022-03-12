import React from "react"
import "./App.scss"
import Footer from "./components/footer/footer"

import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import ProductListing from "./pages/product-listing/product-listing"

const App = () => {
    return (
        <div className="thursday">
            <Navbar />
            {/* <Home /> */}
            <ProductListing />
            <Footer />
        </div>
    )
}

export default App
