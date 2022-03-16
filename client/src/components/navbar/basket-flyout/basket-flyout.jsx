import React from "react"
import { AiOutlineClose } from "react-icons/ai"

import "./basket-flyout.scss"

const BasketFlyout = () => {
    return (
        <aside className="basketflyout">
            <div className="basketflyout-wrapper">
                <header className="basketflyout__header">
                    <h2>Basket</h2>
                    <AiOutlineClose />
                </header>
                <section className="basketflyout__items">

                </section>
            </div>     
        </aside>
    )
}

export default BasketFlyout