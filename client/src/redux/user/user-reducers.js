import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SIGNOUT, SIGNIN_SUCCESS } from "./user-actions"

const INITIAL_STATE = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { ...state, error: null }
        case SIGNIN_SUCCESS: 
            return { ...state, user: action.payload }
        case SIGNIN_FAILURE:
            return { ...state, error: action.payload }
        case SIGNIN_SIGNOUT:
            return { user: null }
        default:
            return state
    }
}