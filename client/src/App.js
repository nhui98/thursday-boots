import React from "react"
import "./App.scss"

import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"

const App = () => {
    return (
        <div className="thursday">
            <Navbar />
            <Home />
        </div>
    )
}

export default App
