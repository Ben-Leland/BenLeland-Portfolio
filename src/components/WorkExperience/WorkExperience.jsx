import React from "react";
import "./WorkExperience.css";

export default function WorkExperience({ start, end, title, company, bullets }) {
    return (
        <div className="work-experience">
            <div className="subtitle-group">
                <p className="symbol">&lt;&gt;</p>
                <p className="work-experience-title">{title}</p>
            </div>

            <p>{company}</p>

            <p className="work-experience-date">{start} &nbsp;-&nbsp; {end}</p>

            <ul className="section-body">
                {bullets.map((bullet) => (
                    <li>{bullet}</li>
                ))}
            </ul>
        </div>
    )
}