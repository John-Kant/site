import React from 'react'
import about from "../../images/about.png"

export default function About() {
    return (
        <section id="about">
            <div className="inner-width">
                <h1 className="section-title">About</h1>
                <div className="about-content">
                    <img src={about} alt className="about-pic" />
                    <div className="about-text">
                        <h2>Welcome!</h2>
                        <h3>
                        <span>Designer</span>
                        <span>Developer</span>
                        <span>Implement</span>
                        </h3>
                        <p>
                            We offer a full range of projects, from the preparation of individual sites,
                            through programming to placing a ready webpage on the server. 
                            Write well designed, testable, efficient code by using best software development practices.
                            Create website layout/user interface by using standard HTML/CSS practices. 
                            Develop sites using Vanilla Javascript, React, Node.js, etc. 
                            Integrate data from various back-end services and databases.
                            We gather and refine specifications and requirements based on technical needs.
                            Create and maintain software documentation. 
                            We stay plugged into emerging technologies/industry trends and apply them into operations and activities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
