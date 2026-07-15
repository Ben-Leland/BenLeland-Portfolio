import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="container">
            <div className="brand">
                <Link to="/" className="nav-link-home">
                    <p className="symbol">&lt;&gt;</p>
                    <p className="navName"><strong>BEN LELAND</strong></p>
                </Link>
                
                <Link to="/contact" className="link-button nav-get-in-touch">GET IN TOUCH &nbsp;&nbsp; 🡥</Link>
            </div>

            <button
                type="button"
                className={`hamburger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
            </div>

            <div className="desktop-menu">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                <Link to="/contact" className="nav-link">Contact Me</Link>
            </div>

            <div className={`overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}></div>
        </nav>
    )
}