import React from "react"

import "./product-listing.scss"

const ProductListing = () => {
    return (
        <>
        <main className="productlisting">
            <aside className="sidenav-container">
                <aside className="sidenav">
                    <h2 className="sidenav-title">boots</h2>
                    <ul className="sidenav-links">
                        <li className="sidenav-link">
                            <a href="/">lace-up</a>
                        </li>
                        <li className="sidenav-link">
                            <a href="/">chelsea</a>
                        </li>
                        <li className="sidenav-link">
                            <a href="/">chukka</a>
                        </li>
                        <li className="sidenav-link">
                            <a href="/">rugged & resilient</a>
                        </li>
                        <li className="sidenav-link">
                            <a href="/">Lace-up</a>
                        </li>
                    </ul>
                    </aside>
            </aside>

            <section className="plisting">
                <header className="header">
                    <img src="/images/listingimg1.webp" alt="" />
                    <div className="title-card">
                        <h2 className="title">
                            mens boots
                        </h2>
                        <p className="sub-title">
                            highest quality. honest prices
                        </p>
                    </div>
                </header>
                
                <div className="plisting-body">
                    <ProductContainer />
                    <ProductContainer />
                </div>
            </section>
        </main>
            

        <section className="faq">
            <h2 className="title">have a question?</h2>
            <p>No problem! we're here to help. click the link for assistance.</p>
            <a href="/" className="button">FAQ</a>
        </section>
        </>
    )
}

const ProductContainer = () => {
    return (
        <>
            <p className="plisting-title">lace-up</p>
            <div className="products-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

const ProductCard = () => {
    return (
        <div className="product-card">
            <a href="/" className="product-card__image">
                <img src="/images/feature-product1.webp" alt=""/>
            </a>
            <div className="details">
                <div className="details-left">
                    <a href="/" className="name">captain</a>
                    <div className="color">black matte</div>
                </div>
                <div className="details-right">
                    <div className="price">£199</div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing