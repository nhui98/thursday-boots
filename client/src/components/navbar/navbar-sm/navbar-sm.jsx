import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

import Flyout from "../flyout/flyout"
import BasketIcon from "../../basket-icon/basket-icon"

const NavbarSm = ({ setBasketToggle }) => {
    const [flyoutToggle, setFlyoutToggle] = useState(false)

    return (
        <>
            {/* Navbar */}
            <nav className="navbarsm">
                <div className="navbarsm__left">
                    <div className="navbarsm__left-hamburger" onClick={() => {
                        document.body.style.overflowY = "hidden"
                        setFlyoutToggle(true)
                    }}>
                        <GiHamburgerMenu />
                    </div>
                    <div className="navbarsm__left-search"><BiSearch /></div>
                </div>
                <div className="navbarsm__center">
                    <Link to="/" className="navbarsm__center-title logo">Khao</Link>
                </div>
                <div className="navbarsm__right">
                    <BasketIcon setBasketToggle={setBasketToggle} />
                </div>
            </nav>

            {/* Flyout */}
            <Flyout flyoutToggle={flyoutToggle} setFlyoutToggle={setFlyoutToggle} />

            {/* Overlay */}
            <div className={`overlay${flyoutToggle ? " active" : ""}`} onClick={() => {
                document.body.style.overflowY = "visible"
                setFlyoutToggle(false)
            }} />
        </>
    )
}

export default NavbarSm