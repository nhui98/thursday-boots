import React from "react";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps";

import "./delivery.scss"

const Delivery = () => {
    return (
        <main className="delivery">
            <section className="delivery__form">
                <CheckoutSteps delivery />
            </section>
        </main>
    )
}
export default Delivery