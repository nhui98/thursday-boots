import axios from "axios"
import { CLEAR_BASKET } from "../basket/basket-actions"

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST"
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS"
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE"
export const LEAVE_CONFIRMATION_PAGE = "LEAVE_CONFIRMATION_PAGE"

export const createOrder = (user, basketitem, deliveryAddress) => async (dispatch, getState) => {

    dispatch({ type: CREATE_ORDER_REQUEST})
    dispatch({ type: CLEAR_BASKET })
    localStorage.removeItem("basketItems")

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

export const leaveConfirmation = () => dispatch => {
    dispatch({
        type: LEAVE_CONFIRMATION_PAGE
    })
}