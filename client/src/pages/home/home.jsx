import React from "react"

import Slide from "./img-slide/slide"
import CategoryGrid from "./category-grid/category-grid"
import Featured from "./featured-collection/featured"

import "./home.scss"

const Home = () => {
    return (
        <main className="home">
            <Slide />
            <CategoryGrid />
            <Featured />
        </main>
    )
}

export default Home