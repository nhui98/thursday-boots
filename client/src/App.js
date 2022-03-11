import React from "react"
import "./App.scss"
import Footer from "./components/footer/footer"

import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"

const App = () => {
    return (
        <div className="thursday">
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App
