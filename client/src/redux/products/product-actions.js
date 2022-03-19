import axios from "axios"

export const GET_PRODUCTLIST_REQUEST = "GET_PRODUCTLIST_REQUEST"
export const GET_PRODUCTLIST_SUCCESS = "GET_PRODUCTLIST_SUCCESS"
export const GET_PRODUCTLIST_FAILURE = "GET_PRODUCTLIST_FAILURE"

export const GET_PRODUCTDETAILS_REQUEST = "GET_PRODUCTDETAILS_REQUEST"
export const GET_PRODUCTDETAILS_SUCCESS = "GET_PRODUCTDETAILS_SUCCESS"
export const GET_PRODUCTDETAILS_FAILURE = "GET_PRODUCTDETAILS_FAILURE"

export const getProductList = (category, type) => async dispatch => {
    dispatch({ type: GET_PRODUCTLIST_REQUEST })

    try {
        const { data } = await axios.post("/api/products", { category, type })

        // get all the styles(ie Captain) available for this type(ie Boots)
        const styles = {}
        data.forEach(x => {
            if (!(x.style in styles)) styles[x.style] = true       
        })
        //
        
        dispatch({
            type: GET_PRODUCTLIST_SUCCESS,
            payload: { data, styles }
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTLIST_FAILURE,
            payload: error.message
        })
    }
}

export const getProductDetails = id => async dispatch => {
    dispatch({ type: GET_PRODUCTDETAILS_REQUEST })
    
    try {
        const { data } = await axios.get(`/api/products/product/${id}`)

        dispatch({
            type: GET_PRODUCTDETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTDETAILS_FAILURE,
            payload: error.message
        })
    }
}