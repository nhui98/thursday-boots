import axios from "axios"
import { CLEAR_BASKET } from "../basket/basket-actions"
import { CLEAR_DELIVERY_ADDRESS } from "../delivery/delivery-actions"

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST"
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS"
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE"

export const createOrder = (user, basketitem, deliveryAddress) => async (dispatch, getState) => {

    dispatch({ type: CLEAR_BASKET })
    localStorage.removeItem("basketItems")
    dispatch({ type: CLEAR_DELIVERY_ADDRESS })
    localStorage.removeItem("deliveryAddress")

    try {
        const { data } = await axios.post("/api/order/createorder", {
            user,
            basketitem,
            deliveryAddress
        })

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({type: CREATE_ORDER_FAILURE, payload: error.message})
    }
}