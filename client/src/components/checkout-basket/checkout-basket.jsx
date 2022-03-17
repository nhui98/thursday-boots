import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./checkout-basket.scss"

const CheckoutBasket = () => {

    const basket = useSelector(state => state.basket)

    return (
        <>
            {
            
                basket && (
                    <section className="checkoutbasket">
                        <div className="checkoutbasket__items">
                            {
                                basket.basketItems.map((item, i) => 
                                    <div className="checkoutbasket__item">
                                        <div className="checkoutbasket__item-img">
                                            <img src={item.img} alt={`${item.name} ${item.color}`} />
                                            <div className="checkoutbasket__item-quantity-wrapper">
                                                <div className="checkoutbasket__item-quantity">
                                                    {item.quantity}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="checkoutbasket__item-details">
                                            <div className="checkoutbasket__item-details-name">
                                                {item.name} | {item.color}
                                            </div>
                                            <div className="checkoutbasket__item-details-size">
                                                {item.size}
                                            </div>
                                        </div>

                                        <div className="checkoutbasket__item-price">
                                            £{item.price*item.quantity}
                                        </div>                     
                                    </div>
                                )
                            }
                        </div>

                        <div className="checkoutbasket__totals">
                            <div className="checkoutbasket__totals-subtotal">
                                <div className="checkoutbasket__totals-subtotal-tag">
                                    subtotal
                                </div>
                                <div className="checkoutbasket__totals-subtotal-quantity">
                                    £{basket.total}
                                </div>
                            </div>
                            <div className="checkoutbasket__totals-shipping">
                                <div className="checkoutbasket__totals-shipping-tag">
                                    shipping
                                </div>
                                <div className="checkoutbasket__totals-shipping-quantity">
                                    Free
                                </div>
                            </div>
                            <div className="checkoutbasket__totals-totals">
                                <div className="checkoutbasket__totals-totals-tag">
                                    total
                                </div>
                                <div className="checkoutbasket__totals-totals-quantity">
                                    £{basket.total}
                                </div>
                            </div>
                        </div>
                    </section >
                )
            
            }
        </>
    )
}

export default CheckoutBasket
