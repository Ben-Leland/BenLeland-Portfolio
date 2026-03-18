import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav class="container">
            <div>
                <p class="navName"><strong>BEN LELAND</strong></p>
            </div>
            
            <div class="links">
                <Link to='/'> Home</Link>
                <Link to='/portfolio'> Portfolio</Link>
                <Link to='/contact'> Contact</Link>
            </div>
        </nav>
    )
}