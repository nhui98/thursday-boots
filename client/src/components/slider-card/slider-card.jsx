import React from "react";
import { Link } from "react-router-dom"

import "./slider-card.scss"

const SliderCard = ({ product: {id, category, type, style, price, color, src, src2 }}) => {
    return (
        <figure className="slidercard">
            <Link to={`/product-details/${id}`}>
                <img src={src} alt={`${style} ${color}`} />     
            </Link>
            <figcaption className="slidercard__details">
                <Link to={`/product-details/${id}`} className="slidercard__details-name">{style}</Link>
                <div className="slidercard__details-color">{color}</div>
                <div className="slidercard__details-price">£{price}</div>
            </figcaption>
        </figure>
    )
}

export default SliderCard
