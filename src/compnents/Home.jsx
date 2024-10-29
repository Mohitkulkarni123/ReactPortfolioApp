import React from 'react';
import kImage from '../../src/assset/k.jpg';


const Main = () => {
    return (
        <main>
            <section className="intro-section">
                <div className="intro-text">
                    I'm <span className="highlight">Mohit</span>,
                    <div>Web Developer</div>
                    <span id="element"></span>
                </div>
                <div className="intro-image">
                    <img src={kImage} alt="Profile" />
                </div>
            </section>
            <hr className="custom-hr" />
            <section className="experience-section">
                <span className="subheading">What I have done so far</span>
                <h1> Work Experience</h1>
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="experience-title">Amazon Web Services</div>
                        <div className="experience-desc">
                            I have hands-on experience with AWS services like EC2, S3, Lambda, and RDS, focusing on cloud infrastructure and automation. I am seeking opportunities in AWS and cloud-based roles to contribute to innovative, scalable solutions.
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-title">Full-Stack Web Development</div>
                        <div className="experience-desc">
                            A skilled Full Stack Developer with expertise in front-end and back-end development.
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-title">Python Developer</div>
                        <div className="experience-desc">
                            Experienced with Python libraries, frontend using Python with various attributes (place, pack, buttonClick), and backend using MySQL Server.
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-title">Oracle Certification</div>
                        <div className="experience-desc">
                            Successfully cleared Oracle Cloud Infrastructure Exam in AI, ML, and DL courses.
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-container">
                    <div className="footer-brand">
                        <h3>Mohit Developer</h3>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-text">
                    © www.mohitportfolio.com | All rights reserved
                </div>
            </footer>
        </main>
    );
}

export default Main;
