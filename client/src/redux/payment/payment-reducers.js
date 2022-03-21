import { GET_PAYPAL_API_FAILURE, GET_PAYPAL_API_REQUEST, GET_PAYPAL_API_SUCCESS } from "./payment-actions"

const INITIAL_STATE = {
    PAYPAL_API_KEY: "",
    loading: true
}

export const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PAYPAL_API_REQUEST:
            return {...state, loading: true, error: null}
        case GET_PAYPAL_API_SUCCESS:
            return { ...state, loading: false, PAYPAL_API_KEY: action.payload }
        case GET_PAYPAL_API_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}