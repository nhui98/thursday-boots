import axios from "axios"

export const GET_PAYPAL_API_REQUEST = "PAYPAL_API_REQUEST"
export const GET_PAYPAL_API_SUCCESS = "GET_PAYPAL_API_SUCCESS"
export const GET_PAYPAL_API_FAILURE = "GET_PAYPAL_API_FAILURE"

export const getPaypalApi = () => async dispatch => {
    dispatch({ type: GET_PAYPAL_API_REQUEST })
    
    try {
        const { data } = await axios.get("/api/payment/apikey")
        
        dispatch({
            type: GET_PAYPAL_API_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PAYPAL_API_FAILURE,
            payload: error.message
        })
    }
}