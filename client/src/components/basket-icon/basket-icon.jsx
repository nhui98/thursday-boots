import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi"
import { useSelector } from "react-redux";

import "./basket-icon.scss"

const BasketIcon = ({setBasketToggle}) => {
    const [quantity, setQuantity] = useState(0)
    const basket = useSelector(state => state.basket)

    useEffect(() => {
        setQuantity(basket.basketItems.reduce((prevValue, item, i) => prevValue + item.quantity, 0))
    }, [basket])
 
    return (
        <div className="basket__icon" onClick={() => {
            document.body.style.overflowY = "hidden"
            setBasketToggle(true)
        }}>
            <BiShoppingBag />
            <div className="basket__icon-wrapper">
                <div className="basket__icon-quantity">
                    {quantity}
                </div>
            </div>
        </div>
    )
}

export default BasketIcon