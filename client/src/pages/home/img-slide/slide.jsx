import React, { useState } from "react";
import Button from "../../../components/button/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Slide = () => {
    const [slideNumber, setSlideNumber] = useState(1)

    const incrementSlide = () => {
        slideNumber < 3 ? setSlideNumber(prevState => prevState + 1) : setSlideNumber(1)
    }

    const decrementSlide = () => {
        slideNumber > 1 ? setSlideNumber(prevState => prevState - 1) : setSlideNumber(3)
    }

    return (
        <section className="slide">
            <div className={"left"} onClick={() => decrementSlide()}>
                <AiOutlineLeft />
            </div>

            <figure className={`slide__wrapper one${slideNumber === 1? " active" : ""}`}>
                <img src="/images/home1.webp" alt="slide 1" className="hidden-sm" />
                <img src="/images/home1-small.webp" alt="slide 1" className="hidden-lg visible-sm" />
                <figcaption className="slide__wrapper-card">
                    <h1>
                        highest quality.
                        <br />
                        honest prices.
                    </h1>
                    <p>handcrafted with integrity</p>
                    <div className="call-to-action">
                        <Button text="shop men" />
                        <Button text="shop women" />
                    </div>
                </figcaption>
            </figure>

            <figure className={`slide__wrapper two${slideNumber === 2 ? " active" : ""}`}>
                <img src="/images/home2.webp" alt="slide 2" className="hidden-sm" />
                <img src="/images/home2-small.webp" alt="slide 2" className="hidden-lg visible-sm" />
                <figcaption className="slide__wrapper-card">
                    <h1>
                        everyday
                        <br />
                        favourites
                    </h1>
                    <p>
                        the dutches chelsea boot in
                        <br />
                        dark olive weathersafe<sup>TM</sup> suede
                    </p>
                    <div className="call-to-action">
                        <Button text="shop women's boots" />
                    </div>
                </figcaption>
            </figure>

            <figure className={`slide__wrapper three${slideNumber === 3 ? " active" : ""}`}>
                <img src="/images/home3.webp" alt="slide 3" className="hidden-sm" />
                <img src="/images/home3-small.webp" alt="slide 3" className="hidden-lg visible-sm" />
                <figcaption className="slide__wrapper-card">
                    <h1>
                        year-round
                        <br />
                        essentials
                    </h1>
                    <p>
                        the premier low top in
                        <br />
                        luxe white nappa leather
                    </p>
                    <div className="call-to-action">
                        <Button text="shop the low top" />
                    </div>
                </figcaption>
            </figure>

            <div className="right" onClick={() => incrementSlide()}>
                <AiOutlineRight />
            </div>

            <div className="dots">
                <div className={`dot${slideNumber === 1 ? " active" : ""}`} />
                <div className={`dot${slideNumber === 2 ? " active" : ""}`} />
                <div className={`dot${slideNumber === 3 ? " active" : ""}`} />
            </div>
        </section>
    )
}

export default Slide
