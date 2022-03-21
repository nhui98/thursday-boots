import React from "react"

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

const PayPalButton = ({ createOrder, onApprove }) => {
    const [{ options, isResolved }] = usePayPalScriptReducer()

    if(!isResolved) return <div className="loading">loading</div>

    return (
        <PayPalButtons
            className={`payment__options-paypal`}
            style={{ layout: "vertical"}}
            createOrder={createOrder}
            onApprove={onApprove}
        />
    )
}   

export default PayPalButton