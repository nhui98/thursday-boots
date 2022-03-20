import React from "react"
import { useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import CheckoutBasket from "../../components/checkout-basket/checkout-basket"
import CheckoutSteps from "../../components/checkout-steps/checkout-steps"

import "./payment.scss"

const Payment = () => {

    const { deliveryAddress } = useSelector(state => state.deliveryAddress)
    const { user } = useSelector(state => state.user)
    const { basketItems } = useSelector(state => state.basket)

    return (
        <>
            {
                !deliveryAddress && <Navigate to={`/checkout/delivery`} />
            }
            {
                !basketItems && <Navigate to={`/`} />
            }
            <main className="payment">
                <section className="payment__form-wrapper">
                    <div className="payment__detailreview">
                    <CheckoutSteps delivery payment />
                        <div className="payment__detailreview-contact">
                            <div className="payment__detailreview-contact-tag">
                                contact
                            </div>
                            <div className="payment__detailreview-contact-details">
                                <div className="payment__detailreview-contact-details-name">
                                    {deliveryAddress.firstName} {deliveryAddress.lastName}
                                </div>
                                <div className="payment__detailreview-contact-details-email">
                                    {deliveryAddress.email}
                                </div>                            
                            </div>
                            <Link to={`/checkout/delivery`}>Change</Link>
                        </div>        
                        <div className="payment__detailreview-shipping">
                            <div className="payment__detailreview-shipping-tag">
                                deliver to
                            </div>
                            <div className="payment__detailreview-shipping-address">
                                {deliveryAddress.address}, {deliveryAddress.city}, {deliveryAddress.postcode}, {deliveryAddress.country}
                            </div>
                            <Link to={`/checkout/delivery`}>Change</Link>
                        </div>  
                    </div>
                    <form className="payment">
                        
                    </form>
                </section>
                <section className="payment__basket">
                    <CheckoutBasket />
                </section>
            </main>
        </>
    )
            
}

export default Payment