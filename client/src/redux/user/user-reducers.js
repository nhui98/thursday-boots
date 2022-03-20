import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SIGNOUT, SIGNIN_SUCCESS } from "./user-actions"

const INITIAL_STATE = {
    user: null,
    loading: false,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { ...state, loading: true, error: null }
        case SIGNIN_SUCCESS: 
            return { ...state, loading: false, user: action.payload }
        case SIGNIN_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case SIGNIN_SIGNOUT:
            return { user: null, loading: false}
        default:
            return state
    }
}