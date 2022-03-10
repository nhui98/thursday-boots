import React from "react";

import "./button.scss"

const Button = props => {
    return (
        <a href="/" className="button">
            {props.text}
        </a>
    )
}

export default Button