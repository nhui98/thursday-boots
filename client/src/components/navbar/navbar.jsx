import React from "react"
import { Outlet } from "react-router-dom"
import NavbarLg from "./navbar-lg/navbar-lg"
import NavbarSm from "./navbar-sm/navbar-sm"
import "./navbar.scss"

const Navbar = props => {
    return (
        <>
            <NavbarLg variant={props.variant ? true : false} />
            <NavbarSm />
            <Outlet />
        </>
    )
}

export default Navbar