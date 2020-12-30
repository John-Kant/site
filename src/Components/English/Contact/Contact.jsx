import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import LanguageContext from "../../context/LanguageContext";
class Contact extends Component {
  static contextType = LanguageContext;

  render() {
    const english =
      this.context === "english" ? (
        <div className="inner-width">
          <h1 className="section-title">Get in touch</h1>
          <div className="contact-info">
            <div className="item">
              <i className="fas fa-mobile-alt" />
              Poland: +48 729 289 235 / +48 729 586 317 <br />
              Senegal: +221 77 241 34 06 / ++221 77 320 64 51
            </div>
            <div className="item">
              <i className="fas fa-envelope" />
              bakarytoure1202@gmail.com / johngomez5541@yahoo.com <br />
              modouyatmakholle@gmail.com / rachid.sagna@gmail.com
            </div>
            <div className="item">
              <i className="fas fa-map-marker-alt" />
              Poznan, Poland
            </div>
          </div>
          <form action="#" className="contact-form">
            <input
              type="text"
              className="nameZone"
              placeholder="Your Full Name"
            />
            <input
              type="email"
              className="emailZone"
              placeholder="Your Email"
            />
            <input type="text" className="subjectZone" placeholder="Subject" />
            <textarea
              className="messageZone"
              placeholder="Message"
              defaultValue={""}
            />
            <input type="submit" defaultValue="Send Message" className="btn" />
          </form>
        </div>
      ) : (
        <div className="inner-width">
          <h1 className="section-title">Entrer en contact</h1>
          <div className="contact-info">
            <div className="item">
              <i className="fas fa-mobile-alt" />
              Pologne: +48 729 289 235 / +48 729 586 317 <br />
              Sénégal: +221 77 241 34 06 / ++221 77 320 64 51
            </div>
            <div className="item">
              <i className="fas fa-envelope" />
              bakarytoure1202@gmail.com <br /> johngomez5541@yahoo.com <br />
              modouyatmakholle@gmail.com <br /> rachid.sagna@gmail.com
            </div>
            <div className="item">
              <i className="fas fa-map-marker-alt" />
              Poznan, Poland
            </div>
          </div>
          <form action="#" className="contact-form">
            <input
              type="text"
              className="nameZone"
              placeholder="Votre nom complet"
            />
            <input
              type="email"
              className="emailZone"
              placeholder="Votre e-mail"
            />
            <input type="text" className="subjectZone" placeholder="Subject" />
            <textarea
              className="messageZone"
              placeholder="Message"
              defaultValue={""}
            />

            <input
              type="submit"
              defaultValue="Send Message"
              className="btn"
              placeholder="Envoyer"
            />
          </form>
        </div>
      );
    return <section id="contact">{english}</section>;
  }
}
export default Contact;
