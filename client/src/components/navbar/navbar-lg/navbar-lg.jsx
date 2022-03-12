import React from "react"
import { BiSearch, BiShoppingBag } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"

const DropDown = () => {
    return (
        <div className="dropdown">
            <ul className="dropdown-links">
                <li className="dropdown-link"><a href="/">boots</a></li>
                <li className="dropdown-link"><a href="/">all styles</a></li>
                <li className="dropdown-link"><a href="/">lace-ups</a></li>
                <li className="dropdown-link"><a href="/">chelsea</a></li>
                <li className="dropdown-link"><a href="/">chukka</a></li>
                <li className="dropdown-link"><a href="/">rugged & resilient</a></li>
            </ul>
            <ul className="dropdown-links">
                <li className="dropdown-link"><a href="/">sneakers</a></li>
                <li className="dropdown-link"><a href="/">all styles</a></li>
                <li className="dropdown-link"><a href="/">high tops</a></li>
                <li className="dropdown-link"><a href="/">low tops</a></li>
            </ul>
            <ul className="dropdown-links">
                <li className="dropdown-link"><a href="/">shoes</a></li>
                <li className="dropdown-link"><a href="/">dress shoes</a></li>
                <li className="dropdown-link"><a href="/">loafers</a></li>
            </ul>
            <ul className="dropdown-links">
                <li className="dropdown-link"><a href="/">accessories & apparel</a></li>
                <li className="dropdown-link"><a href="/">shoe care & laces</a></li>
                <li className="dropdown-link"><a href="/">socks</a></li>
                <li className="dropdown-link"><a href="/">belts</a></li>
                <li className="dropdown-link"><a href="/">jackets</a></li>
                <li className="dropdown-link"><a href="/">wallets</a></li>
            </ul>
        </div>
    )
}

const NavbarLg = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__left">
                <li className="navbar__left-link men">
                    <a href="/">men <AiOutlineDown /></a>
                </li>
                <DropDown />
                <li className="navbar__left-link women">
                <a href="/">women <AiOutlineDown /></a>
                </li>
                <DropDown />
                <li className="navbar__left-link">
                    <a href="/">about</a>
                </li>
            </ul>
            <div className="navbar__center">
                <h2 className="navbar__center-title logo">Khao</h2>
            </div>
            <div className="navbar__right">
                <ul className="navbar__right-links">
                    <li className="navbar__right-link"><a href="/">help</a></li>
                    <li className="navbar__right-link"><a href="/">account</a></li>
                </ul>
                <div className="navbar__icons">
                    <div className="navbar__icons-search"><BiSearch /></div>
                    <div className="navbar__icons-basket"><BiShoppingBag /></div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarLg