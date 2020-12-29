import React, { Component } from "react";
import about from "../../../images/about.png";
import LanguageContext from "../../context/LanguageContext";

class About extends Component {
  static contextType = LanguageContext;
  render() {
    const english =
      this.context === "english" ? (
        <section id="about">
          <div className="inner-width">
            <h1 className="section-title">About</h1>
            <div className="about-content">
              <img src={about} alt className="about-pic" />
              <div className="about-text">
                <h2>WELCOME TO JBAKTECH!</h2>
                <h3>
                    <span>Design</span>
                    <span>Develop</span>
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
      ) : (
        <section id="about">
          <div className="inner-width">
            <h1 className="section-title">A propos</h1>
            <div className="about-content">
              <img src={about} alt className="about-pic" />
              <div className="about-text">
                <h2>Bonjour! Je suis avec toi</h2>
                <h3>
                  <span>Developpeur</span>
                  <span>Disigner</span>
                  <span>Youtubeur</span>
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  fuga eaque, culpa cupiditate animi laborum natus! Similique
                  odio sit facilis dolorum dicta velit provident sequi iusto,
                  est pariatur quisquam corrupti animi necessitatibus aliquid
                  deserunt reprehenderit voluptatibus? Exercitationem deserunt
                  fugit dicta nesciunt velit quae tempora eius praesentium odio
                  est, voluptatem vero incidunt omnis ad iure, soluta maiores
                  nostrum inventore alias culpa. Nihil suscipit possimus est
                  harum accusamus impedit libero deleniti repellat.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    return <>{english}</>;
  }
}
export default About;
