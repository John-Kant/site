import React from "react";
import LangageContext from "../../context/LanguageContext";
import ProviderComponent from "../../ProviderComponent";
class Navbar extends React.Component {
  state = {
    height: 0,
    toggler: false,
    language: "english",
    open: false,
  };
  onLanguageChange = (language, open) => {
    this.setState({ language, open: !open });
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ height: window.pageYOffset });
    });
    return () => window.removeEventListener("scroll", () => {});
  }

  handleToggler = () => {
    this.setState({ toggler: !this.state.toggler });
  };
  render() {
    const { height, toggler, open, language } = this.state;
    return (
      <>
        <nav className={height > 5 ? "navbar sticky " : "navbar goTop"}>
          <div className="inner-width">
            {/* <a href="#" className="logo" /> */}
            {/* <img src={logo} alt="banner" className="logo" /> */}
            <h1 className="logo">JBAKTECH</h1>
            <button
              className={toggler ? "active menu-toggler" : "menu-toggler"}
              onClick={this.handleToggler}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className={toggler ? "active navbar-menu" : "navbar-menu"}
              onClick={this.handleToggler}
            >
              {open ? (
                <>
                  <a href="#home">Accueil</a>
                  <a href="#about">A propos</a>
                  <a href="#services">Nos Services</a>
                  <a href="#education">Education</a>
                  <a href="#works">Travails</a>
                  <a href="#contact">Contact</a>
                  <span
                    className="icon-st"
                    onClick={() => this.onLanguageChange("english", open)}
                  >
                    <i className="flag uk "></i>
                    <span>ENG</span>
                  </span>
                </>
              ) : (
                <>
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#services">Services</a>
                  <a href="#education">Education</a>
                  <a href="#works">Works</a>
                  <a href="#contact">Contact</a>
                  <span
                    className="icon-st"
                    onClick={() => this.onLanguageChange("french", open)}
                  >
                    <i className="flag fr "></i>
                    <span>FR</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </nav>
        <LangageContext.Provider value={language}>
          <ProviderComponent />
        </LangageContext.Provider>
      </>
    );
  }
}
export default Navbar;
