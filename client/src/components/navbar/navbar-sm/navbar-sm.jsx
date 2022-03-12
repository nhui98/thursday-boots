import React, { useState } from "react"
import { BiSearch, BiShoppingBag } from "react-icons/bi"
import { MdOutlineAccountCircle } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Flyout = ({ flyoutToggle, setFlyoutToggle }) => {
    const [dropDown, setDropDown] = useState({
        men: false,
        women: false,
    })

    const dropdownHandler = e => {

        e.currentTarget.dataset.men && setDropDown(prevState => {
            return {...prevState, men: !prevState.men}
        })

        e.currentTarget.dataset.women && setDropDown(prevState => {
            return {...prevState, women: !prevState.women}
        })
    }

    return (
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
                <div className="accordion">
                    <div className={`levelone-header${dropDown.men ? " active" : ""}`} data-men onClick={e => dropdownHandler(e)}>
                        <h2 className="levelone-title">
                            men
                        </h2>
                        <div className="toggle-icons">
                            <div className={`plus${dropDown.men ? " active" : ""}`}>
                                <AiOutlinePlus />
                            </div>
                            <div className={`minus${dropDown.men ? "" : " active"}`}>
                                <AiOutlineMinus />
                            </div>
                        </div>
                    </div>
                    <ul className="levelone-dropdown">
                        <li className="dropdown-item">
                            <a href="/">boots</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="/">sneakers</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="/">shoes</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="/">accessories & apparel</a>
                        </li>
                    </ul>
                </div>
                <div className="accordion">
                    <div
                        className={`levelone-header${dropDown.women ? " active" : ""}`} data-women
                        onClick={e => dropdownHandler(e)}>
                        <h2 className="levelone-title">
                            women
                        </h2>
                        <div className="toggle-icons">
                            <div className={`plus${dropDown.men ? " active" : ""}`}>
                                <AiOutlinePlus />
                            </div>
                            <div className={`minus${dropDown.men ? "" : " active"}`}>
                                <AiOutlineMinus />
                            </div>
                        </div>
                    </div>
                    <ul className="levelone-dropdown">
                        <li className="dropdown-item">
                            <a href="/">boots</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="/">sneakers</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="/">shoes</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="/">accessories & apparel</a>
                        </li>
                    </ul>
                </div>
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
            <Flyout flyoutToggle={flyoutToggle} setFlyoutToggle={setFlyoutToggle} />

            {/* Overlay */}
            <div className={`overlay${flyoutToggle ? " active" : ""}`} onClick={() => setFlyoutToggle(false)} />
        </>
    )
}

export default NavbarSm