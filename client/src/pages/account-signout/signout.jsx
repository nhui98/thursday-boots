import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signout } from "../../redux/user/user-actions";

const Signout = () => {
    const { user } = useSelector(state => state.user)
    console.log(",moo");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (user) {
            console.log("called");
            dispatch(signout())
            navigate(-1)
        }
    },[user, dispatch, navigate])

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