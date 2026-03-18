import React from 'react';
import './Home.css';
import Section from '../../components/Section/Section.jsx';
import aboutText from './Sections/about.js';

export default function Home() {
    return (
        <div>
            <div class="container">
                <div>
                    <img src='/headshot.jpg' alt="Headshot" class="headshot"></img>
                </div>
                <div>
                    <strong><p class="name">
                        BEN LELAND
                    </p>
                    <p class="title">
                        FULL-STACK SOFTWARE ENGINEER
                    </p></strong>
                </div>
                
            </div>

            <Section title="ABOUT" subtitle="Full-Stack Software Engineer" body={aboutText}/>
        </div>
    )
}