import React from "react"

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import Loading2 from "../loading/loading2"

const PayPalButton = ({ createOrder, onApprove }) => {
    const [{ options, isResolved }] = usePayPalScriptReducer()

    if(!isResolved) return <Loading2 />

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