import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, LEAVE_CONFIRMATION_PAGE } from "./order-actions"

const INITIAL_STATE = {
    success: false,
    loading: true,
    error: null,
    orderReference: {
        orderId: null
    }
}
export const orderReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: null
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                orderReference: action.payload
            }
        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                success: false,
                loading: false,
                error: action.payload
            }
        case LEAVE_CONFIRMATION_PAGE:
            return {
                ...state,
                success: false
            }
        default:
            return state
    }
}