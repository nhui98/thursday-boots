import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineRight } from "react-icons/ai"

import "./checkout-steps.scss"

const CheckoutSteps = props => {
    return (
        <div className="checkoutsteps">
            <div className="checkoutsteps-logo">
                <Link to="/"className="logo">Khao</Link>
            </div>
            <div className="checkoutsteps-steps">
                <div className="checkoutsteps-step">
                    Checkout
                </div>

                {
                    props.delivery && (
                        <>
                            < AiOutlineRight />
                            <div className="checkoutsteps-step">
                                Shipping
                            </div>
                        </>
                    )
                }
                {
                    props.payment && 
                    <>
                        < AiOutlineRight />
                        <div className="checkoutsteps-step">
                            Payment
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default CheckoutSteps