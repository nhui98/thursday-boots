import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { productData } from "./data"

import "./product-listing.scss"

const ProductListing = () => {
    const [data, setData] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!params.category || !params.style) {
            navigate(-1)
        } else {
            setData(productData[params.category][params.style])
        }
    }, [navigate, params])

    return (
        <>
        <main className="productlisting">
            <aside className="productlisting__sidenav-container">
                <div className="productlisting__sidenav">
                    <h2 className="productlisting__sidenav-title">{params.style}</h2>
                        <ul className="productlisting__sidenav-links">
                            {
                                data &&
                                Object.keys(data).map((type, i) => {
                                    return (
                                        <li className="productlisting__sidenav-link" key={`productlisting__sidenav-link-${i}`}>
                                            <a href="/">{data[type][0].name}</a>
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
                            data &&
                            Object.keys(data).map((type, i) => {
                                return (
                                    <div className="productlisting__card-container" key={`products-container-${i}`}>
                                        <p className="productlisting__card-title">{data[type][0].name}</p>
                                        <div className="product__cards-wrapper">

                                        <div className="product__cards-container">
                                                {
                                                    data[type].map((product, i) => {
                                                        return (
                                                            <ProductCard product={product} key={`productcard-${i}`} />
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

const ProductCard = ({product}) => {
    return (
        <div className="productlisting__productcard">
            <Link to={product.to} className="productlisting__productcard-image">
                <img src={product.mainImg} alt={`${product.name} ${product.color}`}/>
            </Link>
            <div className="productlisting__productcard-details">
                <div className="productlisting__productcard-details-left">
                    <Link to={product.to} className="productlisting__productcard-details-name">{product.name}</Link>
                    <div className="productlisting__productcard-details-color">{product.color}</div>
                </div>
                <div className="productlisting__productcard-details-right">
                    <div className="productlisting__productcard-details-price">£{product.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing