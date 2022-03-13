import React, { useReducer } from "react";
import { Link } from "react-router-dom"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const INITIAL_STATE = {
    slideNumber: 1,
    slideDetails: [
        {
            largeSrc: "/images/home/home1.webp",
            smallSrc: "/images/home/home1-small.webp",
            title: <h1>highest quality.<br />honest prices.</h1>,
            subtitle: <p>handcrafted with integrity</p>,
            btns: [
                {
                    text: "shop men",
                    to: "/product-listing/mens/boots"
                },
                {
                    text: "shop women",
                    to: "/product-listing/womens/boots",
                }
            ]
        },
        {
            largeSrc: "/images/home/home2.webp",
            smallSrc: "/images/home/home2-small.webp",
            title: <h1>everyday<br />favourites</h1>,
            subtitle: <p>the dutches chelsea boot in<br />dark olive weathersafe suede</p>,
            btns: [
                {
                    text: "shop women's",
                    to: "/product-listing/womens/boots"
                }
            ]
        },
        {
            largeSrc: "/images/home/home3.webp",
            smallSrc: "/images/home/home3-small.webp",
            title: <h1>year round<br />essentials</h1>,
            subtitle: <p>the premier low top in<br />luxe white nappa leather</p>,
            btns: [
                {
                    text: "shop the low top",
                    to: "/product-listing/mens/sneakers"
                }
            ]
        },
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state.slideNumber < 3 ? { ...state, slideNumber: state.slideNumber + 1 }: state
        case "decrement":
            return state.slideNumber > 1 ? {...state, slideNumber: state.slideNumber - 1} : state
        default:
            return state
    }
}

const SlideImg = ({ slideNumber, slide, index }) => {
    const isActive = slideNumber === index ? " active" : ""
    const slideType = index % 2 === 0 ? " even" : " odd"

    return (
        <figure className={`slide__wrapper${slideType}${isActive}`}>
            <img src={`${slide.largeSrc}`} alt={slide.name} className="slide__img-large" />
            <img src={`${slide.smallSrc}`} alt={slide.name} className="slide__img-small" />
            <figcaption className="slide__wrapper-card">
                {slide.title}
                {slide.subtitle}
                <div className="call-to-action">
                    {
                        slide.btns.map((btn, i) => {
                            return (
                                <Link to={btn.to} className="button" key={`btn-${i}`}>{btn.text}</Link>
                            )
                        })
                    }
                </div>
            </figcaption>
        </figure>
    )
}

const Slide = () => {
    const [{slideNumber, slideDetails}, dispatch] = useReducer(reducer, INITIAL_STATE)

    return (
        <section className="slide">
            <div className={"left"} onClick={() => dispatch({ type: "decrement"})}>
                <AiOutlineLeft />
            </div>

            {
                slideDetails.map((slide, i) => {
                    return (
                        <SlideImg slideNumber={slideNumber} slide={slide} index={i + 1} key={`slide-${i}`} />
                    )
                })
            }

            <div className="right" onClick={() => dispatch({type: "increment"})}>
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

