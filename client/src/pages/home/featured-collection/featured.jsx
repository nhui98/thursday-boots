import React, { useState } from "react"
import ProductCard from "./product-card/product-card"

const Featured = () => {
    const [featureToggle, setFeatureToggle] = useState(true)

    return (
        <section className="featured">
            <div className="featured__toggle">
                <div className={`featured__toggle-men${featureToggle ? " active": ""}`} onClick={() => setFeatureToggle(true)}>
                    men's boots
                </div>
                <div className={`featured__toggle-women${featureToggle ? "": " active"}`} onClick={() => setFeatureToggle(false)}>
                    women's boots
                </div>
            </div>

            <div className="featured__products-container">
                <div className={`featured__products men${featureToggle ? " active": ""}`}>
                    <ProductCard
                        src={`images/feature-product1.webp`}
                        src2={`images/feature-product1-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                    <ProductCard
                        src={`images/feature-product1.webp`}
                        src2={`images/feature-product1-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                    <ProductCard
                        src={`images/feature-product1.webp`}
                        src2={`images/feature-product1-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                    <ProductCard
                        src={`images/feature-product1.webp`}
                        src2={`images/feature-product1-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                </div>

                <div className={`featured__products women${featureToggle ? "": " active"}`}>
                    <ProductCard
                        src={`images/feature-product2.webp`}
                        src2={`images/feature-product2-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                    <ProductCard
                        src={`images/feature-product2.webp`}
                        src2={`images/feature-product2-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                    <ProductCard
                        src={`images/feature-product2.webp`}
                        src2={`images/feature-product2-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                    <ProductCard
                        src={`images/feature-product2.webp`}
                        src2={`images/feature-product2-hover.webp`}
                        alt={`feature product 1`}
                        name="captain"
                        color="black matte"
                        price="199"
                    />
                </div>
            </div>
            


        </section>
    )
}

export default Featured