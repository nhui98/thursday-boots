import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"

import Accordion from "../accordion/accordion"

import { MenDropdownLinks, WomenDropdownLinks } from "../data"

const Flyout = ({ flyoutToggle, setFlyoutToggle }) => {
    return (
        <aside className={`navflyout${flyoutToggle ? " active" : ""}`}>
            <header className="navflyout__header">
                <div className="navflyout__header-search">
                    <BiSearch />
                </div>
                <div className="navflyout__header-close" onClick={() => {
                    document.body.style.overflowY = "visible"
                    setFlyoutToggle(false)
                }}>
                    <AiOutlineClose />
                </div>
            </header>

            <section className="navflyout__body">
                <Accordion title={`men`} linksList={MenDropdownLinks}/>
                <Accordion title={`women`} linksList={WomenDropdownLinks} />
                
                <div className="divide" />

                <ul className="navflyout__body-links">
                    <li className="navflyout__body-link">
                        <Link to="/about">about</Link>
                    </li>
                    <li className="navflyout__body-link">
                        <Link to="/help">help</Link>
                    </li>
                    <li className="navflyout__body-link">
                        <Link to="/my-account">account</Link>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default Flyout