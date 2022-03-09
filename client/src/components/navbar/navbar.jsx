import React from "react"

import { BiSearch, BiShoppingBag } from "react-icons/bi"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__left">
                <li className="navbar__left-link"><a href="/">men</a></li>
                <li className="navbar__left-link"><a href="/">women</a></li>
                <li className="navbar__left-link"><a href="/">about</a></li>
            </ul>
            <div className="navbar__center">
                <h2 className="navbar__center-title logo">Thursday Boots</h2>
            </div>
            <ul className="navbar__right">
                <li className="navbar__right"><a href="/">help</a></li>
                <li className="navbar__right"><a href="/">account</a></li>
            </ul>
            <div className="navbar__icons">
                <div className="navbar__icons-search"><BiSearch /></div>
                <div className="navbar__icons-basket"><BiShoppingBag /></div>
            </div>
        </nav>
    )
}

export default Navbar