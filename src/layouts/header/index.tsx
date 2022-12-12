import React from "react";
import "./header.css";
import "../../variables.css";

import logoImg from "../../assets/todo-logo1.png";

export function Header() {
    return (
        <div id="header-container">
            <div id="logo-container">
                <img src={logoImg} alt="App logo" />
            </div>
            <div id="title-container">
                <h1 id="title">To Do</h1>
            </div>
        </div>
    );
}
