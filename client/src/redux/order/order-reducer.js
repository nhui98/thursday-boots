import { CREATE_ORDER_FAILURE, CREATE_ORDER_SUCCESS } from "./order-actions"

export const orderReducer = (state={success:false}, action) => {
    switch (action.type) {
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                success: true,
                data: action.payload
            }
        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                success: false,
                error: action.payload
            }
        default:
            return state
    }
}