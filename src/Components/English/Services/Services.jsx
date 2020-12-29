import React from "react";
import { CgWebsite } from 'react-icons/cg';
import { GiWorld, GiSpanner } from 'react-icons/gi';


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
              <p>We design your sites using Bootstrap, Material-UI, Semantic UI, etc.</p>
            </div>
            <div className="service">
              <CgWebsite className="icon" />
              <h4>Build Websites</h4>
              <p>Using HTML, CSS, JavaScript, React, Node.js, PHP</p>
            </div>
            <div className="service">
              <i className="icon fas fa-database" />
              <h4>Manage Databases</h4>
              <p>SQL Language, using the following databases: NoSQL - MongoDB, </p>
            </div>
            <div className="service">
              {/* <i className="icon fab fa-android" /> */}
              <GiSpanner className="icon" />
              <h4>maintenance</h4>
              <p>
                Most websites today – even though they are easy to edit – are complex software applications. 
                Just like the operating system on your computer, they need to be kept up to date for security 
                and performance reasons.
              </p>
            </div>
            <div className="service">
              <i className="icon fas fa-credit-card" />
              <h4>Ui Design</h4>
              <p>Make designs that are intelligble and memorable using pencil, Photoshop, Sketch, Vyond etc.</p>
            </div>
            <div className="service">
              <GiWorld  className="icon" />
              <h4>Geomatics</h4>
              <p>Collect, measure, and interpret geographic information in order to create 
                and update maps and charts for regional planning, education, and other purposes
              </p>
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
