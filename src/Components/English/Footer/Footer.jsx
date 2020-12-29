import React from "react";
import LanguageContext from "../../context/LanguageContext";
class Footer extends React.Component {
  static contextType = LanguageContext;
  render() {
    const english =
      this.context === "english" ? (
        <div className="inner-width">
          <div className="copyright">
            ©2020 | Created &amp; Designed By <a href="#"></a>
          </div>
          <div className="sm">
            <a href="#" className="fab fa-facebook-f" />
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-instagram" />
            <a href="#" className="fab fa-linkedin-in" />
            <a href="#" className="fab fa-youtube" />
          </div>
        </div>
      ) : (
        <div className="inner-width">
          <div className="copyright">
            ©2020 | 2020 Créé et Conçu par <a href="#"></a>
          </div>
          <div className="sm">
            <a href="#" className="fab fa-facebook-f" />
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-instagram" />
            <a href="#" className="fab fa-linkedin-in" />
            <a href="#" className="fab fa-youtube" />
          </div>
        </div>
      );
    return <footer>{english}</footer>;
  }
}
export default Footer;
