import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import "./product-listing.scss"
import { getProductList } from "../../redux/products/product-actions"
import Loading from "../../components/loading/loading"

const ProductListing = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const {loading, productList, styles, error} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductList(params.category, params.type))
    }, [params, dispatch])

    return (
        <>
        {
            loading ? (<Loading />) :
            (
            <>
                <main className="productlisting">
                    <aside className="productlisting__sidenav-container">
                        <div className="productlisting__sidenav">
                            <h2 className="productlisting__sidenav-title">{params.type}</h2>
                                <ul className="productlisting__sidenav-links">
                                    {
                                        Object.keys(styles).map((style, i) => {
                                            return (
                                                <li className="productlisting__sidenav-link" key={`productlisting__sidenav-link-${i}`}>
                                                    <a href="/">{style}</a>
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
                                     Object.keys(styles).map((style, i) => {
                                        return (
                                            <div className="productlisting__card-container" key={`products-container-${i}`}>
                                                <p className="productlisting__card-title">{style}</p>
                                                <div className="product__cards-wrapper">

                                                <div className="product__cards-container">
                                                        {
                                                            productList.map((product, i) => {
                                                                if (product.style === style) {
                                                                    return (
                                                                        <ProductCard product={product} key={`productcard-${i}`} />
                                                                    )
                                                                }
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
        </>
    )
}

const ProductCard = ({product: {id, category, type, style, price, color, mainImg }}) => {
    return (
        <div className="productlisting__productcard">
            <Link to={`/product-details/${id}`} className="productlisting__productcard-image">
                <img src={mainImg} alt={`${style} ${color}`}/>
            </Link>
            <div className="productlisting__productcard-details">
                <div className="productlisting__productcard-details-left">
                    <Link to={`/product-details/${id}`}className="productlisting__productcard-details-name">{style}</Link>
                    <div className="productlisting__productcard-details-color">{color}</div>
                </div>
                <div className="productlisting__productcard-details-right">
                    <div className="productlisting__productcard-details-price">£{price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing