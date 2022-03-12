import React from "react"
import CategoryGrid from "./category-grid/category-grid"
import Featured from "./featured-collection/featured"

import "./home.scss"
import Slide from "./img-slide/slide"

const Home = () => {
    return (
        <main className="home" id="home">
            <Slide />
            <CategoryGrid />
            <Featured />
        </main>
    )
}

export default Home