import React from "react"

const ProductCard = ({ src, src2, alt, name, color, price }) => {
    return (
        <div className="productcard">
            <a href="/" className="productcard__image">
                <img src={src} alt={alt} className="img"/>
                <img src={src2} alt={alt} className="img-hover"/>
            </a>
            <div className="productcard__details">
                <a href="/" className="productcard__details-name">{name}</a>
                <div className="productcard__details-color">{color}</div>
                <div className="productcard__details-price">£{price}</div>
            </div>
        </div>
    )
}

export default ProductCard