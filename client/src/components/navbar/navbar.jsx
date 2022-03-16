import React from "react"
import { Outlet } from "react-router-dom"
import BasketFlyout from "./basket-flyout/basket-flyout"
import NavbarLg from "./navbar-lg/navbar-lg"
import NavbarSm from "./navbar-sm/navbar-sm"
import "./navbar.scss"

const Navbar = props => {
    return (
        <>
            <NavbarLg variant={props.variant ? true : false} />
            <NavbarSm />
            <BasketFlyout />
            <Outlet />
        </>
    )
}

export default Navbar