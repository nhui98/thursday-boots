
const INITIAL_STATE = {
    basketItems: [],
    total: 0
}

export const basketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_BASKET":
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

        default:
            return state
    }
}