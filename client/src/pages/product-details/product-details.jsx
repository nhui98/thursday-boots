import React from "react";

import "./product-details.scss"

const ProductDetails = () => {
    return (
        <main className="productdetails">
            <section className="details-container">
                <div className="product-images">
                    <div className="main-image">
                        <img src="/images/feature-product1.webp" alt="" />
                    </div>
                </div>
                <div className="product__details">
                    <h2 className="product__details-name">Captain</h2>
                    <div className="product__details-price">£199</div>
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
            </section>
        </main>
    )
}

export default ProductDetails