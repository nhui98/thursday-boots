import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AiFillCheckCircle } from "react-icons/ai"

import "./confirmation.scss"
import { Link } from "react-router-dom"
import Loading from "../../components/loading/loading"
import Error from "../Error/error"
import { leaveConfirmation } from "../../redux/order/order-actions"

const Confirmation = () => {

    const { loading, success, error, orderReference: {orderId} } = useSelector(state => state.order)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {    
            dispatch(leaveConfirmation())
        }
    }, [dispatch])
    
    return (
        <>
            {
                loading ? <Loading /> :
                    error ? <Error /> : 
                        success &&            
                            <main className="confirmation">
                                <section className="confirmation__card">
                                    <div className="confirmation__card-tick">
                                        <AiFillCheckCircle />
                                    </div>
                                    <h1 className="confirmation__card-title">
                                        your order is complete! 
                                    </h1>
                                    <div className="confirmation__card-reference">
                                        Your order reference number is: <strong>{orderId}</strong>
                                    </div>
                                    <div className="confirmation__card-message">
                                        Thank you for your support, we will be in touch soon with the order details.
                                    </div>
                                    <Link to={`/`} className="button confirmation-btn">
                                        continue exploring
                                    </Link>
                                </section>
                            </main>
            }
            
        </>      
    )
}

export default Confirmation