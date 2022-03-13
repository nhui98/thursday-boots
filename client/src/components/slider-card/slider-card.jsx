import React from "react";
import { Link } from "react-router-dom"

import "./slider-card.scss"

const SliderCard = ({ src, name, color, price, to }) => {
    return (
        <figure className="slidercard">
            <Link to={to}>
                <img src={src} alt={name} />     
            </Link>
            <figcaption className="slidercard__details">
                <Link to={to} className="slidercard__details-name">{name}</Link>
                <div className="slidercard__details-color">{color}</div>
                <div className="slidercard__details-price">£{price}</div>
            </figcaption>
        </figure>
    )
}

export default SliderCard
