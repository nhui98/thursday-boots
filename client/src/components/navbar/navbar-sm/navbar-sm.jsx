import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BiSearch, BiShoppingBag } from "react-icons/bi"
import { MdOutlineAccountCircle } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"

import Flyout from "../flyout/flyout"

const NavbarSm = () => {
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
                    <div className="navbarsm__right-account"><MdOutlineAccountCircle /></div>
                    <div className="navbarsm__right-basket"><BiShoppingBag /></div>
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