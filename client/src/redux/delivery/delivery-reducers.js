export const SET_DELIVERY_ADDRESS = "SET_DELIVERY_ADDRESS"

const INITIAL_STATE = {
    deliveryAddress: {}
}

export const deliveryAddressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DELIVERY_ADDRESS: 
            return {
                ...state,
                deliveryAddress: {
                    ...action.payload
                }
            }
        default:
            return state
    }
}