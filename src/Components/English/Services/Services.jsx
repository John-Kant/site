import React from "react";
import { CgWebsite } from "react-icons/cg";
import { GiWorld, GiSpanner } from "react-icons/gi";

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
              <p>
                We design your sites and web applications using Bootstrap,
                Material-ui, Semantic-ui, etc.
              </p>
            </div>
            <div className="service">
              <CgWebsite className="icon" />
              <h4>Build Websites and Web Applications</h4>
              <p>Using HTML, CSS (SCSS), JavaScript, React, Node.js, PHP</p>
            </div>
            <div className="service">
              <i className="icon fas fa-database" />
              <h4>Manage Databases</h4>
              <p>MySQL - PosgresSQL - MongoDB</p>
            </div>
            <div className="service">
              {/* <i className="icon fab fa-android" /> */}
              <GiSpanner className="icon" />
              <h4>Maintenance</h4>
              <p>
                Most websites today – even though they are easy to edit – are
                complex software applications. Just like the operating system on
                your computer, they need to be kept up to date for security and
                performance reasons.
              </p>
            </div>
            <div className="service">
              <i className="icon fas fa-credit-card" />
              <h4>Ui Design</h4>
              <p>
                Make designs that are intelligible and memorable using pencil,
                Photoshop, Sketch, Vyond, etc.
              </p>
            </div>
            <div className="service">
              <GiWorld className="icon" />
              <h4>Geomatics</h4>
              <p>
                Collect, measure, and interpret geographic information in order
                to create and update maps and charts for regional planning,
                education, and other purposes.
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
              <h4>Concevoir</h4>
              <p>
                Nous concevons vos sites et applications Web en utilisant
                Bootstrap, Material-ui, Semantic-ui, etc.
              </p>
            </div>
            <div className="service">
              {/* <i className="icon fas fa-pager" /> */}
              <CgWebsite className="icon" />
              <h4>Créer des sites et applications Web</h4>
              <p>
                En utilisant HTML, CSS (SCSS), JavaScript, React, Node.js, PHP.
              </p>
            </div>
            <div className="service">
              <i className="icon fas fa-database" />
              <h4>Gérer les bases de données</h4>
              <p>MySQL - PosgresSQL - MongoDB</p>
            </div>
            <div className="service">
              <i className="icon fab fa-android" />
              <h4>La maintenance</h4>
              <p>
                La plupart des sites Web actuels. même si elles sont faciles à
                modifier - sont des applications logicielles complexes. Tout
                comme le système d'exploitation sur votre ordinateur, ils
                doivent être tenus à jour pour des raisons de sécurité et
                raisons de performance
              </p>
            </div>
            <div className="service">
              <i className="icon fas fa-credit-card" />
              <h4>Conception de l'interface utilisateur</h4>
              <p>
                Réalisez des designs intelligibles et mémorables à l'aide d'un
                crayon, Photoshop, Sketch, Vyond, etc.
              </p>
            </div>
            <div className="service">
              <i className="icon fas fa-keyboard" />
              <h4>Géomatique</h4>
              <p>
                Recueillir, mesurer et interpréter les informations
                géographiques afin de créer et de mettre à jour des cartes et
                des graphiques à des fins de planification régionale,
                d'éducation et à d'autres fins.
              </p>
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
