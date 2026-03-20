import React from 'react';
import './Home.css';
import Section from '../../components/Section/Section.jsx';
import aboutText from './Sections/about.js';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div className="container home">
                <div>
                    <img src='/headshot.jpg' alt="Headshot" className="headshot"></img>

                    <p className="name">
                        BEN LELAND
                    </p>

                    <p className="title">
                        FULL-STACK SOFTWARE ENGINEER
                    </p>
                </div>

                <div className="link-container">
                    <Link to='/contact' className="get-in-touch"> GET IN TOUCH &nbsp;&nbsp; 🡥</Link>
                </div>
                    
                <div className="link-container resume">
                    <a href="/Ben Leland - Resume.pdf" download> DOWNLOAD RESUME &nbsp;&nbsp; {'\u2B73'}</a>
                </div>

            </div>

            {/* <Section title="ABOUT" subtitle="Full-Stack Software Engineer" body={aboutText}/> */}
        </div>
    )
}