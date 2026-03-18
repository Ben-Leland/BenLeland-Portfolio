import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav class="container">
            <p><strong>BEN LELAND</strong></p>
            <Link to='/'> Home</Link>
            <Link to='/portfolio'> Portfolio</Link>
        </nav>
    )
}