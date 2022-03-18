import React from "react";
import { Link } from "react-router-dom";
import CheckoutBasket from "../../components/checkout-basket/checkout-basket";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps";

import "./delivery.scss"

const Delivery = () => {
    return (
        <main className="delivery">
            <section className="delivery__form-wrapper">
                <form className="delivery__form">
                    <CheckoutSteps delivery />
                    <div className="delivery__basket-small">
                        <CheckoutBasket />
                    </div>
                    <div className="delivery__form-contact">
                        <div className="delivery__form-contact-text">
                            <div className="delivery__form-contact-label">contact information</div>
                            <div className="delivery__form-contact-login">already have an account? <Link to={`/login`}>Log in</Link></div>
                        </div>
                        <div className="delivery__form-email">
                            <input type="email" placeholder="Email" name="email" />
                        </div>              
                    </div>
                    <div className="delivery__form-shipping">
                        <div className="delivery__form-shipping-label">shipping address</div>
                        <input className="delivery__form-shipping-country" name="country" placeholder="Country" />
                        <div className="delivery__form-shipping-name">
                            <input type="text" placeholder="First name" name="firstname" />
                            <input type="text" placeholder="Last name" name="lastname" />
                        </div>
                        <div className="delivery__form-shipping-address">
                            <input type="text" placeholder="Address" name="address" />
                        </div>
                        <div className="delivery__form-shipping-city">
                            <input type="text" name="city" placeholder="City" />
                            <input type="text" name="postcode" placeholder="Postcode" />
                        </div>
                        <div className="delivery__form-shipping-phone">
                            <input type="number" name="phone" placeholder="Phone" />
                        </div>
                    <button className="button delivery-btn">continue to payment</button>
                        
                    </div>
                </form>
            </section>
            <section className="delivery__basket">
                <CheckoutBasket />
            </section>
        </main>
    )
}
export default Delivery