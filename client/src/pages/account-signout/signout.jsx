import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { SIGNIN_SIGNOUT } from "../../redux/user/user-actions";

const Signout = () => {
    const { user } = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            dispatch({
                type: SIGNIN_SIGNOUT
            })
            navigate(-1)
        }
    })

    return (
        <>
            {
                !user &&
                <Navigate to={`/signin`} />
            }
        </>
    )
}

export default Signout