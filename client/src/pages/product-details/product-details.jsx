import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../product-listing/data.js"

import "./product-details.scss"

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({})
    const [productColorDetails, setProductColorDetails] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!params.category || !params.style || !params.type || !params.color) {
            navigate(-1)
        }
        
        setProductDetails(productData[params.category][params.style].filter((product, i) => 
            product.name === params.type
        )[0])

    }, [params, navigate])

    return (
        <main className="productdetails">
                <div className="productdetails__images">
                    <div className="productdetails__images-main">
                        <img src={``} alt="" />
                    </div>
                </div>
                <div className="product__details">
                    <h2 className="product__details-name">{productDetails.name}</h2>
                    <div className="product__details-price">{productDetails.price}</div>
                    <div className="product__details-color">color: matte black</div>
                    <div className="variation">
                        <div className="variation-img"><img src="/images/feature-product1.webp" alt="" /></div>
                        <div className="variation-img"><img src="/images/feature-product1.webp" alt="" /></div>
                        <div className="variation-img"><img src="/images/feature-product1.webp" alt="" /></div>
                        <div className="variation-img"><img src="/images/feature-product1.webp" alt="" /></div>
                        <div className="variation-img"><img src="/images/feature-product1.webp" alt="" /></div>
                        <div className="variation-img"><img src="/images/feature-product1.webp" alt="" /></div>
                    </div>
                    <div className="product__details-sizes">
                        <p>Size (UK): we recommend you order 1/2 size smaller than you wear in sneakers.</p>
                        <div className="size-grid">
                            <div className="size">6</div>
                            <div className="size">7</div>
                            <div className="size">8</div>
                            <div className="size">9</div>
                            <div className="size">10</div>
                            <div className="size">11</div>
                            <div className="size">12</div>
                            <div className="size">13</div>
                        </div>
                    </div>
                    <div className="button">
                        add to cart
                    </div>
                    <div className="shipping-info">
                        free shipping on orders over £250
                     </div>
                </div>
        </main>
    )
}

export default ProductDetails