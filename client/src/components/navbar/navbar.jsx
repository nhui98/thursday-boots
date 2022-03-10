import React from "react"
import NavbarLg from "./navbar-lg/navbar-lg"
import NavbarSm from "./navbar-sm/navbar-sm"
import "./navbar.scss"

const Navbar = () => {
    return (
        <>
            <NavbarLg />
            <NavbarSm />
        </>
    )
}

export default Navbar