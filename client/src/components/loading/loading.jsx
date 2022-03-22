import React from "react"

import "./loading.scss"

const Loading = () => {
    return (
        <section className="loading">
            <h1 className="logo">Khao</h1>
            <div className="loading__dots">
                <div className="loading__dot one"></div>
                <div className="loading__dot two"></div>
                <div className="loading__dot three"></div>
            </div>
        </section>
    )
}

export default Loading