import React, { useState } from "react"
import { useSelector } from "react-redux"
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./checkout-basket.scss"

const CheckoutBasket = () => {
    const [basketToggle, setBasketToggle] = useState(false)
    const basket = useSelector(state => state.basket)

    return (
        <>
            <div className="checkoutbasket__accordion">
                <div className="checkoutbasket__accordion-drop" onClick={() => setBasketToggle(prevState => !prevState)}>
                    <AiOutlineShoppingCart />
                    {
                        basketToggle ?
                            <>show order summary</> :
                            <>hide order summary</>
                    }
                </div>
                <div className="checkoutbasket__accordion-totals">
                    £{basket.total}
                </div>
            </div>
            {
            
                basket && (
                    <section className={`checkoutbasket${basketToggle ? " active" : ""}`}>
                        <div className="checkoutbasket__items">
                            {
                                basket.basketItems.map((item, i) => 
                                    <div className="checkoutbasket__item" key={`basket-item-${i}`}>
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
