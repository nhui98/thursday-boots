import { ADD_ITEM_TO_BASKET, REMOVE_ITEM_FROM_BASKET } from "./basket-actions"

const INITIAL_STATE = {
    basketItems: localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [],
}

export const basketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            const product = action.payload
            const itemExists = state.basketItems.find(item => item.id === product.id && item.size === product.size)
            
            if (itemExists) {
                return {
                    ...state,
                    basketItems: state.basketItems.map(item => item === itemExists ? { ...item, quantity: item.quantity + product.quantity } : item),
                }
            } else {
                return {
                    ...state,
                    basketItems: [...state.basketItems, product],
                }
            }
        case REMOVE_ITEM_FROM_BASKET:
            const itemToRemove = state.basketItems.find(item => item.id === action.payload.id && item.size === action.payload.size)

            if (itemToRemove.quantity > 1) {

                return {
                    ...state,
                    basketItems: state.basketItems.map(item => item === itemToRemove ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 } : item),
                }
            } else {
                return {
                    ...state,
                    basketItems: state.basketItems.filter(item => item !== itemToRemove),
                }
            }

        default:
            return state
    }
}