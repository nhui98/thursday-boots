import { CLEAR_DELIVERY_ADDRESS, SET_DELIVERY_ADDRESS } from "./delivery-actions"

const INITIAL_STATE = {
    deliveryAddress: localStorage.getItem("deliveryAddress") ? JSON.parse(localStorage.getItem("deliveryAddress")) : {}
}

export const deliveryAddressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DELIVERY_ADDRESS: 
            return {
                ...state,
                deliveryAddress: action.payload
            }
        case CLEAR_DELIVERY_ADDRESS:
            return {
                
            }
        default:
            return state
    }
}