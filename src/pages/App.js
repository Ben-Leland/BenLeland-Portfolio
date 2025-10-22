import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Navbar from '../components/Navbar/Navbar.js';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}