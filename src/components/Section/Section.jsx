import React from 'react';
import './Section.css';

export default function Section({title, subtitle, body}) {
    return (
        <div className="container">
            <div className="section-1">
                <p className="section-title">{title}</p>
            </div>

            <div className="section-2">
                <div className='subtitle-group'>
                    <p className="symbol">&lt;&gt;</p>
                    <p className="section-subtitle"><strong>{subtitle}</strong></p>
                </div>
                <p className="section-body">{body}</p>
            </div>
        </div>
    )
}