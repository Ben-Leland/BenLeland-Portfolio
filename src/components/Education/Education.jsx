import React from "react";
import "./Education.css";

export default function Education({ degree, university, location, progress, date }) {
    return (
        <div className="section-2">
            <div className="subtitle-group">
                <p className="symbol">&lt;&gt;</p>
                <p className="education-degree">{degree}</p>
            </div>
            
            <p className="education-info">{university} - {location}</p>
            <p className="education-info"><strong>{progress}</strong>: {date}</p>
        </div>
    )
}