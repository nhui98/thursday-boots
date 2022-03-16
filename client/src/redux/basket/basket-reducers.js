
const INITIAL_STATE = {
    basketItems: []
}

export const basketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_BASKET":
            const product = action.payload
            const itemExists = state.basketItems.find(item => item.id === product.id && item.size === product.size)

            if (itemExists) {
                return {
                    ...state, basketItems: state.basketItems.map(item => item === itemExists ? {...item, quantity: item.quantity + product.quantity} : item)
                } 
            } else {
                return {...state, basketItems: [...state.basketItems, product]}
            }

        default:
            return state
    }
}