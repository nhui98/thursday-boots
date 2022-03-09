import React from "react";
import ReactDom from "react-dom"

import App from "./App";

import "./styles/variables.scss"
import "./styles/global.scss"

ReactDom.render(
    <App />,
    document.getElementById("root")
)