import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import BasketFlyout from "../basket-flyout/basket-flyout"
import NavbarLg from "./navbar-lg/navbar-lg"
import NavbarSm from "./navbar-sm/navbar-sm"
import "./navbar.scss"

const Navbar = props => {
    const [basketToggle, setBasketToggle] = useState(false)

    return (
        <>   
            <NavbarLg variant={props.variant ? true : false} setBasketToggle={setBasketToggle} />
            <NavbarSm setBasketToggle={setBasketToggle} />
            <BasketFlyout setBasketToggle={setBasketToggle} basketToggle={basketToggle} />
            {/* Overlay */}
            <div className={`overlay${basketToggle ? " active" : ""}`} onClick={() => {
                document.body.style.overflowY = "visible"
                setBasketToggle(false)
            }} />
            <Outlet />   
        </>
    )
}

export default Navbar