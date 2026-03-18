import React from 'react';
import './Section.css';

export default function Section({title, subtitle, body}) {
    return (
        <div className="container section">
            <div className="section-left">
                <p className="title">{title}</p>
            </div>

            <div className="section-right">
                <p className="symbol">&lt;&gt;</p>
                <p className="subtitle"><strong>{subtitle}</strong></p>
                <p className="body">{body}</p>
            </div>
        </div>
    )
}