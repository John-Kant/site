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
                <h2>Hi! I'm Darkcode</h2>
                <h3>
                  <span>Developer</span>
                  <span>Designer</span>
                  <span>Youtuber</span>
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
