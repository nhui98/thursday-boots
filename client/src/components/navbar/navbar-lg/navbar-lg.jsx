import React from "react"
import { Link } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import { AiOutlineDown } from "react-icons/ai"

import { DropDown } from "../dropdown/dropdown"

import { MenDropdownLinks, WomenDropdownLinks } from "../data"
import BasketIcon from "../../basket-icon/basket-icon"

const NavbarLg = props => {
    return (
        <nav className={`navbar${props.variant ? " variant": ""}`}>
            <ul className="navbar__left">
                <li className="navbar__left-link men">
                    men <AiOutlineDown />
                </li>
                <DropDown linksList={MenDropdownLinks} />
                <li className="navbar__left-link women">
                    women <AiOutlineDown  />
                </li>
                <DropDown linksList={WomenDropdownLinks} />
                <li className="navbar__left-link">
                    <Link to={`/about`}>about</Link>
                </li>
            </ul>

            <div className="navbar__center">
                <Link to="/" className="navbar__center-title logo">Khao</Link>
            </div>
            
            <div className="navbar__right">
                <ul className="navbar__right-links">
                    <li className="navbar__right-link">
                        <Link to={`/help`}>help</Link>
                    </li>
                    <li className="navbar__right-link">
                        <Link to={`/my-account`}>account</Link>
                    </li>
                </ul>
                <div className="navbar__icons">
                    <div className="navbar__icons-search"><BiSearch /></div>
                    <BasketIcon setBasketToggle={props.setBasketToggle} />
                </div>
            </div>
        </nav>
    )
}

export default NavbarLg