import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import "./signin.scss"
import { signin } from "../../redux/user/user-actions"

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const { user, error } = useSelector(state=>state.user)

    const signinHandler = e => {    
        e.preventDefault()
        dispatch(signin(email, password))
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate(-1)
        }
    },[user, navigate])

    return (
        <div className="signin">
            <h1>customer login</h1>
            <form className="signin__form" onSubmit={e => signinHandler(e)}>
                {
                    error &&
                    <div className="error">Invalid email or password</div>
                }
                <label htmlFor="email">email</label>
                <input type="email" className="input" id="input" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">password</label>
                <input type="password" className="password" id="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" className="button signin-btn">Sign in</button>
            </form>
            <p className="signin__register">
                new customer?&nbsp;
                <Link to={`/register`}>register here</Link>
            </p>
        </div>
    )
}

export default Signin