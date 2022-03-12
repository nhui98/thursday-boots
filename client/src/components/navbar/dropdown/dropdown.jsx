import React from "react"
import { Link } from "react-router-dom"

const DropDownLinks = ({ links }) => {
    return (
        <>
            <li className="dropdown-link">{links.category}</li>
            {
                links.links.map((link, i) => {
                    return (
                        <li className="dropdown-link" key={`dropdonw-link-${i}`}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export const DropDown = ({ linksList })=> {
    return (
        <div className="dropdown">
            {
                linksList.map((links, i) => {
                    return (
                        <ul className="dropdown-links" key={`dropdonw-links-${i}`}>
                            <DropDownLinks links={links} />                 
                        </ul>
                    )
                })
            }
        </div>
    )
}