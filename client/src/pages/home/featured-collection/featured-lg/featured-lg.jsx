import React, { useState } from "react"
import ProductCard from "../../../../components/product-card/product-card"

import {homeFeaturedMenData, homeFeaturedWomenData} from "../../data"

const Featuredlg = () => {
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
                <div className={`featured__products men${featureToggle ? " active" : ""}`}>
                    {
                        homeFeaturedMenData.map((product, i) => {
                            return (
                                <ProductCard key={`product-card-${i}`}
                                    name={product.name}
                                    color={product.color}
                                    price={product.price}
                                    src={product.src}
                                    src2={product.src2}
                                    to={product.to}
                                />
                            )
                        })
                    }
                </div>

                <div className={`featured__products women${featureToggle ? "": " active"}`}>
                    {
                        homeFeaturedWomenData.map((product, i) => {
                            return (
                                <ProductCard key={`product-card-${i}`}
                                    name={product.name}
                                    color={product.color}
                                    price={product.price}
                                    src={product.src}
                                    src2={product.src2}
                                    to={product.to}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Featuredlg