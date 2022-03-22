import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import CheckoutBasket from "../../components/checkout-basket/checkout-basket"
import CheckoutSteps from "../../components/checkout-steps/checkout-steps"
import { getPaypalApi } from "../../redux/payment/payment-actions"

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import "./payment.scss"
import PayPalButton from "../../components/paypal-button/paypal-button"
import { createOrder } from "../../redux/order/order-actions"
import Loading from "../../components/loading/loading"

const Payment = () => {
    const { deliveryAddress } = useSelector(state => state.deliveryAddress)
    const { user } = useSelector(state => state.user)
    const { basketItems } = useSelector(state => state.basket)
    const {loading, error, PAYPAL_API_KEY} = useSelector(state => state.payment)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPaypalApi())
    }, [dispatch])
    
    const intialOptions = {
        "client-id": PAYPAL_API_KEY,
        currency: "GBP",
        intent: "capture"
    }

    const createOrderHandler = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: basketItems.reduce((total, item) => total+(item.quantity*item.price), 0)
                    }
                }
            ]
        })
    }

    const navigate = useNavigate()
    const onApproveHandler = (data, actions) => {
        // dispatch(createOrder(user, basketItems, deliveryAddress))
        navigate("/checkout/confirmation")      
    }

    return (
        <>
            {
                !deliveryAddress ? <Navigate to={`/checkout/delivery`} /> :
                !basketItems.length > 0 ? <Navigate to={`/`} /> :
                loading ? <Loading /> :
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
                    
                            <form className="payment__options">
                                {
                                    error ? <div className="error">An error has occured. Please try again or contact support</div> :
                                    PAYPAL_API_KEY &&
                                    <PayPalScriptProvider options={intialOptions}>
                                        <PayPalButton createOrder={createOrderHandler} onApprove={onApproveHandler} />
                                    </PayPalScriptProvider>
                                }
                            </form>
                        </section>
                        <section className="payment__basket">
                            <CheckoutBasket />
                        </section>
                    </main>     
            }
        </>
    )         
}

export default Payment