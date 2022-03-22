import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineClose, AiFillLock } from "react-icons/ai"

import "./basket-flyout.scss"
import { removeItemFromBasket } from "../../redux/basket/basket-actions"

const BasketFlyout = ({ setBasketToggle, basketToggle}) => {
    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch()

    const removeFromBasketHandler = (item) => {
        dispatch(removeItemFromBasket(item))
    }

    const navigate = useNavigate()

    const toCheckoutHandler = () => {
        // check if user logged in?
        document.body.style.overflowY = "auto"
        navigate("/checkout/delivery")
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
            <section className="basketflyout__items">
                {
                    !basket.basketItems.length > 0 ? (<div className="basketflyout__items-empty">basket empty</div>) :
                        basket.basketItems.map((item, i) => {
                            return (
                                <div className={`basketflyout__item`} key={`basketitem-${i}`}>
                                    <Link to={`/product-details/${item.id}`} className="basketflyout__item-image">
                                        <img src={item.img} alt={`${item.style} ${item.color}`} />
                                    </Link>
                                    <div className="basketflyout__item-details">
                                        <Link to={`/product-details/${item.id}`} className="basketflyout__item-details-name">
                                            {item.style} | {item.color}
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
            {
                basket.basketItems.length > 0 &&
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
                            £{
                                basket.basketItems.reduce((total, item) => total + (item.quantity*item.price), 0)
                            }
                        </div>
                    </div>
                    <div className="button basketflyout__footer-checkout-btn" onClick={() => toCheckoutHandler()}>
                        <AiFillLock />
                        checkout
                    </div>
                </footer>
            }
            
        </aside>
    )
}

export default BasketFlyout