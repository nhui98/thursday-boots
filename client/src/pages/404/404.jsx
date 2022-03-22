import React from "react"
import { Link } from "react-router-dom"

import "./404.scss"

const NotFound = () => {
    return (
        <main className="notfound">
            <div className="notfound__header">
                <h1>404</h1>
                <p>page not found</p>
            </div>
            <p>Lost your way? Let's get you back home.</p>
            <Link to={`/`} className="button notfound-btn">home</Link>
        </main>
    )
}

export default NotFound