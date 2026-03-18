import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import './App.css';

// TODO: find overall theme of website
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}