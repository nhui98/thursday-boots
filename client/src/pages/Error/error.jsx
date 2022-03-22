import React from "react"
import { Link } from "react-router-dom"

import "./error.scss"

const Error = (props) => {
    return (
        <main className="errorpage">
            <div className="errorpage__header">
                <h1>Error</h1>
                <p>an error occurred</p>
            </div>
            {
                props.error &&
                <p>{props.error}</p>
            }
            <Link to={`/`} className="button notfound-btn">return to safety</Link>
        </main>
    )
}

export default Error