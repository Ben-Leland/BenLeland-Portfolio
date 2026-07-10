import React from "react";
import "./Home.css";
import WorkExperience from "../../components/WorkExperience/WorkExperience.jsx";
import jobs from "../../components/WorkExperience/WorkExperience.json"
import Education from "../../components/Education/Education.jsx";
import education from "../../components/Education/Education.json"

export default function Home() {
    return (
        <div>
            <div className="container home">
                <div>
                    <img src="/headshot.jpg" alt="Headshot" className="headshot"></img>

                    <p className="name">
                        BEN LELAND
                    </p>

                    <p className="title">
                        FULL-STACK SOFTWARE ENGINEER
                    </p>
                </div>

                <div className="link-container">
                    <Link to="/contact" className="get-in-touch"> GET IN TOUCH &nbsp;&nbsp; 🡥</Link>
                </div>
                    
                <div className="link-container resume">
                    <a href="/Ben Leland - Resume.pdf" download> DOWNLOAD RESUME &nbsp;&nbsp; {"\u2B73"}</a>
                </div>

            </div>

            <div className="container home">
                <div className="section-1">
                    <p className="section-title"> ABOUT </p>
                </div>

                <div className="section-2">
                    <div className="subtitle-group">
                        <p className="symbol">&lt;&gt;</p>
                        <p className="section-subtitle">Full-Stack Software Engineer</p>
                    </div>
                    <p className="section-body">Hi, my name is Ben Leland! I’m a recent graduate from the University of Washington where I studied Informatics, with a focus in Data Science and Software Engineering. I’m actively pursuing software engineering roles and am eager to deepen my skills through hands-on work and mentorship opportunities.</p>
                </div>

                <a href="https://www.linkedin.com/in/ben-leland/" target="_blank" rel="noreferrer" className="link-container resume section-linkedin"> LINKEDIN &nbsp;&nbsp; 🡥</a>
            </div>

            <div className="container home">
                <div className="section-1">
                    <p className="section-title"> SKILLS </p>
                </div>

                <div className="section-2">
                    <div className="subtitle-group">
                        <p className="symbol">&lt;&gt;</p>
                        <p className="section-subtitle">Areas of Expertise</p>
                    </div>

                    <ul className="section-body">
                        <li><strong>Full-Stack Development</strong> — Experience in client-side tech (JavaScript, React, HTML, CSS) and backend/systems work (Java, Python, C), plus API integration in production environments</li>
                        <li><strong>Data Engineering & Analysis</strong> — Built ETL pipelines, created databases and complex queries (SQL), and generated data visualizations (R); coursework in data structures and data modeling</li>
                        <li><strong>Software Development in Professional Settings</strong> — Shipped code to production systems, worked with internal APIs, and used Git/GitHub for version control and team collaboration</li>
                    </ul>

                    <div>

                    </div>
                </div>
            </div>

            <div className="container home">
                <div className="section-1">
                    <p className="section-title"> WORK EXPERIENCE </p>
                    
                </div>

                {jobs.map((job) => (
                    <WorkExperience
                        start={job.start}
                        end={job.end}
                        title={job.title}
                        company={job.company}
                        bullets={job.bullets}
                    ></WorkExperience>
                ))}
            </div>

            <div className="container home">
                <div className="section-1">
                    <p className="section-title">EDUCATION</p>

                </div>

                {education.map((education) => (
                    <Education
                        degree={education.degree}
                        university={education.university}
                        location={education.location}
                        progress={education.progress}
                        date={education.date}
                    ></Education>
                ))}

            </div>
        </div>
    )
}