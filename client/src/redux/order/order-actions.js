import axios from "axios"
import { CLEAR_BASKET } from "../basket/basket-actions"

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST"
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS"
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE"
export const LEAVE_CONFIRMATION_PAGE = "LEAVE_CONFIRMATION_PAGE"

export const createOrder = (user, basketitems, deliveryAddress, paymentMethod) => async (dispatch, getState) => {
    const {firstName, lastName, email, country, address, city, postcode, phone} = deliveryAddress

    dispatch({ type: CREATE_ORDER_REQUEST})
    dispatch({ type: CLEAR_BASKET })
    localStorage.removeItem("basketItems")

    try {

        const order = {
            email,
            firstName,
            lastName,
            deliveryAddress: {
                country,
                address,
                city,
                postcode
            },
            phone,
            orderItems: basketitems.map(item => {
                return {
                    orderItemId: item.id,
                    style: item.style,
                    price: item.price,
                    color: item.color,
                    size: item.size,
                    quantity: item.quantity
                }
            }),
            paymentMethod,
            paymentTotal: basketitems.reduce((total, item) => total+(item.price*item.quantity),0)
        }

        if (user) {
            order.userId = user.id
        }

        console.log(order);

        const { data } = await axios.post("/api/orders/createorder", {order})

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