import React from "react";
import { Link } from "react-router-dom"

import SliderCard from "../../../../components/slider-card/slider-card";

import { homeFeaturedMenData, homeFeaturedWomenData } from "../../../../data/data"

const Featuredsm = () => {
    return (
        <section className="featuredsm">
            <div className="imgslider__wrapper">
                <h2 className="imgslider__title">
                    shop men's boots
                </h2>

                <div className="imgslider-container">
                    <div className="imgslider">
                        {
                            homeFeaturedMenData.map((product, i) => {
                                return (
                                    <SliderCard key={`slider-card-${i}`} product={product} />
                                )
                            })
                        }
                    </div>
                </div>

                <Link to={`/product-listing/mens/boots`} className="button">
                    shop men's boots
                </Link>
            </div>

            <div className="imgslider__wrapper">
                <h2 className="imgslider__title">
                    shop womens's boots
                </h2>

                <div className="imgslider-container">
                    <div className="imgslider">
                    {
                            homeFeaturedWomenData.map((product, i) => {
                                return (
                                    <SliderCard key={`slider-card-${i}`} product={product} />
                                )
                            })
                        }
                    </div>
                </div>

                <Link to={`/product-listing/womens/boots`} className="button">
                    shop men's boots
                </Link>
            </div>
        </section>
    )
}

export default Featuredsm