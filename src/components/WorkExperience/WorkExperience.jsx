import React from 'react';
import './WorkExperience.css';

export default function WorkExperience({ start, end, title, company, bullets }) {
    return (
        <div className="work-experience">
            <p className="symbol">&lt;&gt;</p>

            <p className="work-experience-title">{title}</p>

            <p>{company}</p>

            <p className="work-experience-date">{start} &nbsp;-&nbsp; {end}</p>

            <ul>
                {bullets.map((bullet) => (
                    <li>{bullet}</li>
                ))}
            </ul>
        </div>
    )
}