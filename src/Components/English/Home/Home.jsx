import React, { Component } from "react";
import LanguageContext from "../../context/LanguageContext";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
class MyComponent extends Component {
  render() {
    return (
      <div>
        <h2>
          {" "}
          <Typed
            strings={[
              "Here you can find anything",
              "I am a developer",
              "We like to challange ourself",
            ]}
            backSpeed={100}
            typeSpeed={90}
            backDelay={5000}
            loop
          />
        </h2>
        <br />
      </div>
    );
  }
}
class Home extends Component {
  static contextType = LanguageContext;
  render() {
    const english =
      this.context === "english" ? (
        <div className="inner-width">
          <div className="content">
            <h1>Hi I'm </h1>
            <MyComponent />
            <div className="sm">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin-in" />
              <a href="#" className="fab fa-youtube" />
            </div>
            <div className="buttons">
              <a href="#">Contact me</a>
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="inner-width">
          <div className="content">
            <h1>Hi I'm </h1>
            <MyComponent />
            <div className="sm">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin-in" />
              <a href="#" className="fab fa-youtube" />
            </div>
            <div className="buttons">
              <a href="#">Contacte moi</a>
              <a href="#">Telecharger le CV</a>
            </div>
          </div>
        </div>
      );
    return <section id="home">{english}</section>;
  }
}
export default Home;
