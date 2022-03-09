import React from "react"
import { BiSearch, BiShoppingBag } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"
import "./navbar.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__left">
                <li className="navbar__left-link">
                    <a href="/">men <AiOutlineDown /></a>
                </li>
                <li className="navbar__left-link">
                <a href="/">women <AiOutlineDown /></a>
                </li>
                <li className="navbar__left-link">
                    <a href="/">about <AiOutlineDown /></a>
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

export default Navbar