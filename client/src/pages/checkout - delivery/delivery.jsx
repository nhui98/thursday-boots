import React from "react";
import CheckoutBasket from "../../components/checkout-basket/checkout-basket";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps";

import "./delivery.scss"

const Delivery = () => {
    return (
        <main className="delivery">
            <section className="delivery__form">
                <CheckoutSteps delivery />
                <section className="delivery__basket-small">
                    <CheckoutBasket />
                </section>
                hello
            </section>
            <section className="delivery__basket">
                <CheckoutBasket />
            </section>
        </main>
    )
}
export default Delivery