import axios from "axios"

export const SIGNIN_REQUEST = "SIGNIN_REQUEST"
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_FAILURE = "SIGNIN_FAILURE"
export const SIGNIN_SIGNOUT = "SIGNIN_SIGNOUT"
export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const signin = (email, password) => async dispatch => {
    dispatch({ type: SIGNIN_REQUEST })
    
    try {
        const { data } = await axios.post("/api/users/login", { email, password })
        
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("user", JSON.stringify(data))
    } catch (error) {   
        dispatch({
            type: SIGNIN_FAILURE,
            payload: error.message
        })
    }
}

export const signout = () => async (dispatch, getState) => {
    dispatch({ type: SIGNIN_SIGNOUT })

    localStorage.removeItem("user")
}

export const register = (firstName, lastName, email, password) => async dispatch => {
    dispatch({ type: REGISTER_REQUEST })

    try {
        const { data } = await axios.post("api/users/register", firstName, lastName, email, password )

        dispatch({ type: REGISTER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message })
    }
}