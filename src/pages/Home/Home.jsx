import React from 'react';
import './Home.css';
import aboutText from './Sections/about.js';
import educationText from './Sections/education.js';
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

            <div className='container home'>
                <div className="section-1">
                    <p className="section-title"> ABOUT </p>
                </div>

                <div className="section-2">
                    <div className='subtitle-group'>
                        <p className="symbol">&lt;&gt;</p>
                        <p className="section-subtitle"><strong></strong></p>
                    </div>
                    <p className="section-body"></p>
                </div>
                <a href='https://www.linkedin.com/in/ben-leland/' target='_blank' rel='noreferrer' className='link-container resume section-linkedin'> LINKEDIN &nbsp;&nbsp; 🡥</a>
            </div>
        </div>
    )
}