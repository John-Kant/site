import React from 'react'

export default function About() {
    return (
        <section id="about">
            <div className="inner-width">
                <h1 className="section-title">About</h1>
                <div className="about-content">
                <img src="images/pic.png" alt className="about-pic" />
                <div className="about-text">
                    <h2>Hi! I'm Darkcode</h2>
                    <h3>
                    <span>Developer</span>
                    <span>Designer</span>
                    <span>Youtuber</span>
                    </h3>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa. Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.
                    </p>
                </div>
                </div>
                <div className="skills">
                <div className="skill">
                    <div className="skill-info">
                    <span>HTML</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar html" />
                </div>
                <div className="skill">
                    <div className="skill-info">
                    <span>CSS</span>
                    <span>80%</span>
                    </div>
                    <div className="skill-bar css" />
                </div>
                <div className="skill">
                    <div className="skill-info">
                    <span>Javascript</span>
                    <span>70%</span>
                    </div>
                    <div className="skill-bar js" />
                </div>
                <div className="skill">
                    <div className="skill-info">
                    <span>PHP</span>
                    <span>60%</span>
                    </div>
                    <div className="skill-bar php" />
                </div>
                <div className="skill">
                    <div className="skill-info">
                    <span>MySQL</span>
                    <span>90%</span>
                    </div>
                    <div className="skill-bar mysql" />
                </div>
                <div className="skill">
                    <div className="skill-info">
                    <span>C#</span>
                    <span>80%</span>
                    </div>
                    <div className="skill-bar cs" />
                </div>
                </div>
            </div>
        </section>
    )
}
