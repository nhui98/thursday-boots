import React from "react"
import { Link } from "react-router-dom"

import "./product-card.scss"

const ProductCard = ({ src, src2, alt, name, color, price, to }) => {
    return (
        <div className="productcard">
            <Link to={`${to}`} className="productcard__image">
                <img src={src} alt={alt} className="img"/>
                <img src={src2} alt={alt} className="img-hover"/>
            </Link>
            <div className="productcard__details">
                <Link to={`${to}`} className="productcard__details-name">{name}</Link>
                <div className="productcard__details-color">{color}</div>
                <div className="productcard__details-price">£{price}</div>
            </div>
        </div>
    )
}

export default ProductCard