export const ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET"
export const REMOVE_ITEM_FROM_BASKET = "REMOVE_ITEM_FROM_BASKET"
export const CLEAR_BASKET = "CLEAR_BASKET"

export const addItemToBasket = item => async (dispatch, getState) => {
    dispatch({
        type: ADD_ITEM_TO_BASKET,
        payload: item
    })

    localStorage.setItem("basketItems", JSON.stringify(getState().basket.basketItems))
}

export const removeItemFromBasket = item => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_FROM_BASKET,
        payload: item
    })

    localStorage.setItem("basketItems", JSON.stringify(getState().basket.basketItems))
}



