import React from "react"
import { Link } from "react-router-dom"

import "./product-card.scss"

const ProductCard = ({ product: {id, category, type, style, price, color, src, src2} }) => {
    return (
        <figure className="productcard">
            <Link to={`/product-details/${id}`} className="productcard__image">
                <img src={src} alt={`${style} ${color}`} className="img" />
                {
                    src2 &&
                    <img src={src2} alt={`${style} ${color}`} className="img-hover"/>
                }
            </Link>
            <figcaption className="productcard__details">
                <Link to={`/product-details/${id}`} className="productcard__details-name">{style}</Link>
                <div className="productcard__details-color">{color}</div>
                <div className="productcard__details-price">£{price}</div>
            </figcaption>
        </figure>
    )
}

export default ProductCard