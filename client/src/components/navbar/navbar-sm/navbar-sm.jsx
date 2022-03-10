import React from "react"
import { BiSearch, BiShoppingBag } from "react-icons/bi"
import { MdOutlineAccountCircle } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import "./navbar-sm.scss"
import NavbarFlyout from "./navbar-flyout/navbar-flyout"

const NavbarSm = () => {
    return (
        <>
            <nav className="navbarsm">
                <div className="navbarsm__left">
                    <div className="navbarsm__left-hamburger"><GiHamburgerMenu /></div>
                    <div className="navbarsm__left-search hidden-xs"><BiSearch /></div>
                </div>
                <div className="navbarsm__center">
                    <h2 className="navbarsm__center-title logo">Khao</h2>
                </div>
                <div className="navbarsm__right">
                    <div className="navbarsm__right-account hidden-xs"><MdOutlineAccountCircle /></div>
                    <div className="navbarsm__right-basket"><BiShoppingBag /></div>
                </div>
            </nav>
            <NavbarFlyout />
        </>
    )
}

export default NavbarSm