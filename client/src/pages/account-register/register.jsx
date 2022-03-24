import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { register } from "../../redux/user/user-actions"

import "./register.scss"

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordsMatch, setPasswordsMatch] = useState(true)

    const dispatch = useDispatch()

    const registerHandler = e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setPasswordsMatch(false)
        } else {
            setPasswordsMatch(true)

            dispatch(register({firstName, lastName, email, password}))
        }
    }

    return (
        <main className="register">
            <h1>Register</h1>
            {
                !passwordsMatch &&
                <div className="error">passwords do not match</div>
            }
            <form className="register__form" onSubmit={e => registerHandler(e)}>
                <div className="register__form-tag">name</div>
                <div className="register__form-name">
                    <input type="text" name="firstName" placeholder="First Name" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <input type="text" name="lastName" placeholder="Last Name" required value={lastName} onChange={e => setlastName(e.target.value)} />
                </div>
                <div className="register__form-tag">email</div>
                <input type="text" name="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
                <div className="register__form-tag">password</div>
                <input type="password" name="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                <div className="register__form-tag">confirm password</div>
                <input type="password" name="password2" placeholder="Confirm Password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button type="submit" className="button register-btn">register</button>
            </form>
            <p className="register__signin">
                already have an account?&nbsp;
                <Link to={`/signin`}>login here</Link>
            </p>
        </main>
    )
}

export default Register