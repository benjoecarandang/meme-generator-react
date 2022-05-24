import React from "react"
import Logo from "../images/Troll Face.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header--logo" src={Logo} alt="Logo" />
            <h2 className="header--title mr-auto">Meme Generator</h2>
            <p className="header--project">© Benjoe Carandang</p>
        </header>
    )
}