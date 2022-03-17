export const ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET"
export const REMOVE_ITEM_FROM_BASKET = "REMOVE_ITEM_FROM_BASKET"

const INITIAL_STATE = {
    basketItems: [],
    total: 0
}

export const basketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            const product = action.payload
            const itemExists = state.basketItems.find(item => item.id === product.id && item.size === product.size)
            const totalPrice = state.total + (Number.parseFloat(product.quantity) * product.price)
            
            if (itemExists) {
                return {
                    ...state,
                    basketItems: state.basketItems.map(item => item === itemExists ? { ...item, quantity: item.quantity + product.quantity } : item),
                    total: totalPrice
                }
            } else {
                return {
                    ...state,
                    basketItems: [...state.basketItems, product],
                    total: totalPrice
                }
            }
        case REMOVE_ITEM_FROM_BASKET:
            const itemToRemove = state.basketItems.find(item => item.id === action.payload.id)

            if (itemToRemove.quantity > 1) {

                return {
                    ...state,
                    basketItems: state.basketItems.map(item => item === itemToRemove ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 } : item),
                    total: state.total - itemToRemove.price
                }
            } else {
                return {
                    ...state,
                    basketItems: state.basketItems.filter(item => item !== itemToRemove),
                    total: state.total - itemToRemove.price
                }
            }

        default:
            return state
    }
}