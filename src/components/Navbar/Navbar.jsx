import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="container">
            <div className="brand">
                <p className="symbol">&lt;&gt;</p>
                <p className="navName"><strong>BEN LELAND</strong></p>
            </div>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
            </div>

            <div className={`overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}></div>
        </nav>
    )
}