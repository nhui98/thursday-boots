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

            <section className="navflyout__links">
                
            </section>
        </aside>
    )
}

export default NavbarFlyout