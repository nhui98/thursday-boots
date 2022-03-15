import React, { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { productData } from "./data"

import "./product-listing.scss"

const ProductListing = () => {
    const params = useParams()
    const navigate = useNavigate()
    const category = productData[params.category] 

    useEffect(() => {
        if (!category || !category[params.style]) {
            navigate(-1)
        }
    }, [category, navigate, params])

    return (
        <>
        <main className="productlisting">
            <aside className="productlisting__sidenav-container">
                <div className="productlisting__sidenav">
                    <h2 className="productlisting__sidenav-title">{params.style}</h2>
                        <ul className="productlisting__sidenav-links">
                            {
                                category[params.style] &&
                                category[params.style].map((style, i) => {
                                    return (
                                        <li className="productlisting__sidenav-link" key={`productlisting__sidenav-link-${i}`}>
                                            <a href="/">{style.name}</a>
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </aside>

            <section className="productlisting__body">
                <header className="productlisting__body-header">
                    <img src="/images/home/listingimg1.webp" alt="" />
                    <div className="productlisting__body-title-wrapper">
                        <h2 className="productlisting__body-title">
                            mens boots
                        </h2>
                        <p className="productlisting__body-sub-title">
                            highest quality. honest prices
                        </p>
                    </div>
                </header>
                
                    <div className="productlisting__cards-container">
                        {
                            category[params.style] &&
                            category[params.style].map((style, i) => {
                                return (
                                    <div className="productlisting__card-container" key={`products-container-${i}`}>
                                        <p className="productlisting__card-title">{style.name}</p>
                                        <div className="product__cards-wrapper">

                                        <div className="product__cards-container">
                                                {
                                                    style.color.map((color, i) => {
                                                        return (
                                                            <ProductCard style={style} color={color} key={`productcard-${i}`} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })          
                        }
                </div>
            </section>
        </main>
            

        <section className="productlisting__faq">
            <h2 className="productlisting__faq-title">have a question?</h2>
            <p>No problem! we're here to help. click the link for assistance.</p>
            <Link to="/faq" className="button productlisting__faq-button">FAQ</Link>
        </section>
        </>
    )
}

const ProductCard = ({style, color}) => {
    return (
        <div className="productlisting__productcard">
            <Link to={color.to} className="productlisting__productcard-image">
                <img src={color.mainImg} alt={`${style.name} ${color.color}`}/>
            </Link>
            <div className="productlisting__productcard-details">
                <div className="productlisting__productcard-details-left">
                    <Link to={color.to} className="productlisting__productcard-details-name">{style.name}</Link>
                    <div className="productlisting__productcard-details-color">{color.color}</div>
                </div>
                <div className="productlisting__productcard-details-right">
                    <div className="productlisting__productcard-details-price">£{style.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing