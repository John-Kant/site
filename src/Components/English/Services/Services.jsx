import React from "react";
import LanguageContext from "../../context/LanguageContext";
class Services extends React.Component {
  static contextType = LanguageContext;
  render() {
    const english =
      this.context === "english" ? (
        <div className="inner-width">
          <h1 className="section-title">Services</h1>
          <div className="services">
            <div className="service">
              <i className="icon fas fa-paint-brush" />
              <h4>Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-pager" />
              <h4>Build Websites</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-database" />
              <h4>Manage Databases</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fab fa-android" />
              <h4>Android Apps</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-credit-card" />
              <h4>Ui Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-keyboard" />
              <h4>Edit Texts</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="inner-width">
          <h1 className="section-title">Nos Services</h1>
          <div className="services">
            <div className="service">
              <i className="icon fas fa-paint-brush" />
              <h4>Design</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-pager" />
              <h4>Créer des sites Web</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-database" />
              <h4>Gérer les bases de données</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fab fa-android" />
              <h4>Applications Android</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-credit-card" />
              <h4>Conception de l'interface utilisateur</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service">
              <i className="icon fas fa-keyboard" />
              <h4>Modifier les textes</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      );

    return (
      <section id="services" className="dark">
        {english}
      </section>
    );
  }
}
export default Services;
