import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutBasket from "../../components/checkout-basket/checkout-basket";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps";
import { SET_DELIVERY_ADDRESS } from "../../redux/delivery/delivery-reducers";

import "./delivery.scss"

const Delivery = () => {
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postcode, setPostcode] = useState("")
    const [phone, setPhone] = useState("")

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isCountryValid, setIsCountryValid] = useState(true)
    const [isFirstNameValid, setIsFirstNameValid] = useState(true)
    const [isLastNameValid, setIsLastNameValid] = useState(true)
    const [isAddressValid, setIsAddressValid] = useState(true)
    const [isCityValid, setIsCityValid] = useState(true)
    const [isPostcodeValid, setIsPostcodeValid] = useState(true)
    const [isPhoneValid, setIsPhoneValid] = useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formSubmitHandler = e => {
        e.preventDefault()

        //handle form validation

        if (isEmailValid && isCountryValid && isFirstNameValid && isLastNameValid && isAddressValid && isCityValid && isPostcodeValid && isPhoneValid) {
            dispatch({
                type: SET_DELIVERY_ADDRESS,
                payload: {
                    firstName,
                    lastName,
                    email,
                    country,
                    address,
                    city,
                    postcode,
                    phone
                }
            })
            navigate("/checkout/payment")
        }
    }

    return (
        <main className="delivery">
            <section className="delivery__form-wrapper">
                <form className="delivery__form" onSubmit={ e => formSubmitHandler(e)}>
                    <CheckoutSteps delivery />
                    <div className="delivery__basket-small">
                        <CheckoutBasket />
                    </div>
                    <div className="delivery__form-contact">
                        <div className="delivery__form-contact-text">
                            <div className="delivery__form-contact-label">contact information</div>
                            <div className="delivery__form-contact-login">already have an account? <Link to={`/login`}>Log in</Link></div>
                        </div>
                        <div className="delivery__form-email">
                            <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>              
                    </div>
                    <div className="delivery__form-shipping">
                        <div className="delivery__form-shipping-label">shipping address</div>
                        <input className="delivery__form-shipping-country" name="country" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} required  />
                        <div className="delivery__form-shipping-name">
                            <input type="text" placeholder="First name" name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} required  />
                            <input type="text" placeholder="Last name" name="lastname" value={lastName} onChange={e => setLastName(e.target.value)} required  />
                        </div>
                        <div className="delivery__form-shipping-address">
                            <input type="text" placeholder="Address" name="address" value={address} onChange={e => setAddress(e.target.value)} required  />
                        </div>
                        <div className="delivery__form-shipping-city">
                            <input type="text" name="city" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required  />
                            <input type="text" name="postcode" placeholder="Postcode" value={postcode} onChange={e => setPostcode(e.target.value)} required  />
                        </div>
                        <div className="delivery__form-shipping-phone">
                            <input type="number" name="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required  />
                        </div>
                        <button className="button delivery-btn">continue to payment</button>               
                    </div>
                </form>
            </section>
            <section className="delivery__basket">
                <CheckoutBasket />
            </section>
        </main>
    )
}
export default Delivery