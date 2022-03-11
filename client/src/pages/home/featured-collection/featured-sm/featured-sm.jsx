import React from "react";

import Button from "../../../../components/button/button";

const Featuredsm = () => {
    return (
        <section className="featuredsm">
            <div className="imgslider__wrapper">
                <h2 className="imgslider__title">
                    shop men's boots
                </h2>

                <div className="imgslider-container">
                    <div className="imgslider">
                        <div className="imgslider-img">
                            <img src="images/sliderimg1.webp" alt="slider1" />     
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                        <div className="imgslider-img">
                            <img src="images/sliderimg1.webp" alt="slider1" />      
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                        <div className="imgslider-img">
                            <img src="images/sliderimg1.webp" alt="slider1" />  
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                        <div className="imgslider-img">
                            <img src="images/sliderimg1.webp" alt="slider1" />   
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button text="shop men's boots"/>
            </div>

            <div className="imgslider__wrapper">
                <h2 className="imgslider__title">
                    shop womens's boots
                </h2>

                <div className="imgslider-container">
                    <div className="imgslider">
                        <div className="imgslider-img">
                            <img src="images/sliderimg2.webp" alt="slider1" />     
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                        <div className="imgslider-img">
                            <img src="images/sliderimg2.webp" alt="slider1" />      
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                        <div className="imgslider-img">
                            <img src="images/sliderimg2.webp" alt="slider1" />  
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                        <div className="imgslider-img">
                            <img src="images/sliderimg2.webp" alt="slider1" />   
                            <div className="imgslider-details">
                                <div className="imgslider-details-name">Captain</div>
                                <div className="imgslider-details-color">matte black</div>
                                <div className="imgslider-details-price">£199</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button text="shop women's boots"/>
            </div>
        </section>
    )
}

export default Featuredsm