import React from "react"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import "./navbar-flyout.scss"

const NavbarFlyout = () => {
    return (
        <aside className="navflyout">
            <header className="navflyout__header">
                <div className="navflyout__header-search">
                    <BiSearch />
                </div>
                <div className="navflyout__header-close">
                    <AiOutlineClose />
                </div>
            </header>

            <section className="navflyout__body">
                <div className="navflyout__body-accordion">Men</div>
                <div className="navflyout__body-accordion">Women</div>
                <div className="divide" />
                <ul className="navflyout__body-links">
                    <li className="navflyout__body-link"><a href="/">about</a></li>
                    <li className="navflyout__body-link"><a href="/">help</a></li>
                    <li className="navflyout__body-link"><a href="/">account</a></li>
                    <li className="navflyout__body-link"><a href="/">gift cards</a></li>
                </ul>
            </section>
        </aside>
    )
}

export default NavbarFlyout