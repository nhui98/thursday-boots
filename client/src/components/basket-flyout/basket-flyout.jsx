import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineClose, AiFillLock } from "react-icons/ai"

import "./basket-flyout.scss"
import { REMOVE_ITEM_FROM_BASKET } from "../../redux/basket/basket-reducers"

const BasketFlyout = ({ setBasketToggle, basketToggle}) => {
    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch()

    const removeFromBasketHandler = (item) => {
        dispatch({
            type: REMOVE_ITEM_FROM_BASKET,
            payload: item
        })
    }

    return (
        <aside className={`basketflyout${basketToggle ? " active" : ""}`}>
            <header className="basketflyout__header">
                <h2>Your Cart</h2>
                <AiOutlineClose onClick={() => {
                    document.body.style.overflowY = "visible"
                    setBasketToggle(false)
                }} />

            </header>
            {
                basket.basketItems.length > 0 && (
                <>
                    <section className="basketflyout__items">
                        {
                                basket.basketItems.map((item, i) => {
                                    return (
                                        <div className={`basketflyout__item`} key={`basketitem-${i}`}>
                                            <Link to={`/product-details/${item.id}`} className="basketflyout__item-image">
                                                <img src={item.img} alt={item.name} />
                                            </Link>
                                            <div className="basketflyout__item-details">
                                                <Link to={`/product-details/${item.id}`} className="basketflyout__item-details-name">
                                                    {item.name} | {item.color}
                                                </Link>
                                                <div className="basketflyout__item-details-size">
                                                    Size: {item.size}
                                                </div>
                                                <div className="basketflyout__item-details-price">
                                                    £{item.price} x {item.quantity}
                                                </div>
                                                <div onClick={() => removeFromBasketHandler(item)} className="basketflyout__item-details-remove">
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </section>  
                    <footer className="basketflyout__footer">
                        <div className="basketflyout__footer-shipping">
                            <div className="basketflyout__footer-shipping-tag">
                                shipping          
                            </div>
                            <div className="basketflyout__footer-shipping-quantity">
                                free
                            </div>
                        </div>
                        <div className="basketflyout__footer-subtotal">
                            <div className="basketflyout__footer-subtotal-tag">
                                subtotal
                            </div>
                            <div className="basketflyout__footer-subtotal-quantity">
                                £{basket.total}
                            </div>
                        </div>
                        <div className="button basketflyout__footer-checkout-btn">
                            <AiFillLock />
                            checkout
                        </div>
                    </footer>
                </>               
                )
            }
        </aside>
    )
}

export default BasketFlyout