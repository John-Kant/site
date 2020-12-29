import React from "react";
import footerImg from "../../../images/footer-img.png"
import LanguageContext from "../../context/LanguageContext";
class Footer extends React.Component {
  static contextType = LanguageContext;
  render() {
    const english =
      this.context === "english" ? (
        <footer>
          <div className="footer-container">
            <div className="left-col">
              <img src={footerImg} alt="logo footer" className="footer-logo" />
              <div className="social-media">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
              <p className="rights-text">© JBAKTECH at your Service 2020 | All Rights Reserved.</p>
            </div>
            <div className="right-col">
              <h1 className="newsletter">Our Newsletter</h1>
              <div className="border" />
              <p className="enter">Enter Your Email to get our news and updates.</p>
              <form action className="newsletter-form">
                <input type="text" className="txtb" placeholder="Enter Your Email" />
                <input type="submit" className="btn" defaultValue="submit" />
              </form>
            </div>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="footer-container">
            <div className="left-col">
              <img src={footerImg} alt="logo footer" className="footer-logo" />
              <div className="social-media">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
              <p className="rights-text">© 2020 Created By DarkCode All Rights Reserved.</p>
            </div>
            <div className="right-col">
              <h1>Our Newsletter</h1>
              <div className="border" />
              <p>Enter Your Email to get our news and updates.</p>
              <form action className="newsletter-form">
                <input type="text" className="txtb" placeholder="Enter Your Email" />
                <input type="submit" className="btn" defaultValue="submit" />
              </form>
            </div>
          </div>
        </footer>

      );
    return <footer>{english}</footer>;
  }
}
export default Footer;
