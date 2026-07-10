import React from "react";
import "./Education.css";

export default function Education({ degree, university, location, progress, date }) {
    return (
        <div className="education">
            <div className="subtitle-group">
                <p className="symbol">&lt;&gt;</p>
                <p className="education-degree">{degree}</p>
            </div>
            
            <p className="education-university">{university} - {location}</p>
            <p className="education-progress"><strong>{progress}</strong>: {date}</p>
        </div>
    )
}