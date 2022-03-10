import React from "react"
import CategoryGrid from "./category-grid/category-grid"

import "./home.scss"
import Slide from "./img-slide/slide"

const Home = () => {
    return (
        <main className="home">
            <Slide />
            <CategoryGrid />
        </main>
    )
}

export default Home