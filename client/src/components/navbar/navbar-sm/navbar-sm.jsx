import React, { useState } from "react"
import { BiSearch, BiShoppingBag } from "react-icons/bi"
import { MdOutlineAccountCircle } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const NavbarSm = () => {
    const [flyoutToggle, setFlyoutToggle] = useState(false)

    return (
        <>
            {/* Navbar */}
            <nav className="navbarsm">
                <div className="navbarsm__left">
                    <div className="navbarsm__left-hamburger" onClick={() => setFlyoutToggle(true)}>
                        <GiHamburgerMenu />
                    </div>
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

            {/* Flyout */}
            <aside className={`navflyout${flyoutToggle ? " active" : ""}`}>
                <header className="navflyout__header">
                    <div className="navflyout__header-search">
                        <BiSearch />
                    </div>
                    <div className="navflyout__header-close" onClick={() => setFlyoutToggle(false)}>
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

            {/* Overlay */}
            <div className={`overlay${flyoutToggle ? " active" : ""}`} onClick={() => setFlyoutToggle(false)} />
        </>
    )
}

export default NavbarSm