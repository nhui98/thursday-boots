import React from "react"

const CategoryGrid = () => {
    return (
        <section className="categorygrid">
            <div className="grid">
                <a href={`/`} className="grid__item one">
                    <img src="/images/category1.webp" alt="category 1" />
                    <h2 className="grid__item-title">men's boots</h2>
                </a>
                <a href={`/`} className="grid__item two">
                    <img src="/images/category2.webp" alt="category 2" />
                    <h2 className="grid__item-title">women's boots</h2>
                </a>
                <a href={`/`} className="grid__item three">
                    <img src="/images/category3.webp" alt="category 3" />
                    <p className="grid__item-title">dress shoes</p>
                </a>
                <a href={`/`} className="grid__item four">
                    <img src="/images/category4.webp" alt="category 4" />
                    <p className="grid__item-title">men's jackets</p>   
                </a>
                <a href={`/`} className="grid__item five">
                    <img src="/images/category5.webp" alt="category 5" />
                    <p className="grid__item-title">men's sneakers</p>             
                </a>
                <a href={`/`} className="grid__item six">
                    <img src="/images/category6.webp" alt="category 6" />
                    <p className="grid__item-title">women's lace-ups</p>
                </a>
                <a href={`/`} className="grid__item seven">
                    <img src="/images/category7.webp" alt="category 7" />
                    <p className="grid__item-title">high heels</p>
                </a>
            </div>
        </section>
    )
}

export default CategoryGrid