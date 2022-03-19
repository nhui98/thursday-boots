import { GET_PRODUCTLIST_FAILURE, GET_PRODUCTLIST_REQUEST, GET_PRODUCTLIST_SUCCESS } from "./product-actions"

const INITIAL_STATE = {
    loading: true,
    productList: []
}

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTLIST_REQUEST:
            return { ...state, loading: true }
        case GET_PRODUCTLIST_SUCCESS:
            return { ...state, loading: false, productList: action.payload.data, styles: action.payload.styles }
        case GET_PRODUCTLIST_FAILURE: 
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}