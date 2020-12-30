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
                  We offer a full range of projects, from the preparation of
                  individual sites, through programming to placing a ready
                  webpage on the server. We also write concise, testable, and
                  efficient code to design mockups using software development
                  best practices. Create a website layout/user interface by
                  using standard HTML/CSS practices. <br /> The technologies we
                  mainly use to develop our websites and web applications are
                  Vanilla Javascript, React, Node.js, Java, etc. We use various
                  methods to connect the Front-End to the Back-End to integrate
                  the data from the database. We gather and refine
                  specifications and requirements based on technical needs.
                  Create and maintain software documentation. <br /> Finally, we
                  stay connected with emerging technologies / industry trends
                  and apply them to operations and to activities.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="about">
          <div className="inner-width">
            <h1 className="section-title">À propos</h1>
            <div className="about-content">
              <img src={about} alt className="about-pic" />
              <div className="about-text">
                <h2>BIENVENUE CHEZ JBAKTECH</h2>
                <h3>
                  <span>Concevoir</span>
                  <span>Développer</span>
                  <span>Implémenter</span>
                </h3>
                <p>
                  Nous proposons une gamme complète de projets, de la
                  préparation de sites individuels, en passant par la
                  programmation, jusqu'à la mise en place d'une application Web
                  sur le serveur. Nous écrivons également de code concis,
                  testable et efficace pour concevoir des maquettes en utilisant
                  les meilleures pratiques de développement logiciel. Créer une
                  mise en page de site Web / une interface utilisateur en
                  utilisant les pratiques HTML / CSS standard. <br /> Les
                  technologies que nous utilisons principalement pour développer
                  nos sites Web et nos applications Web sont Vanilla Javascript,
                  React, Node.js, etc. Nous utilisons diverses méthodes pour
                  connecter le front-end au back-end afin d'intégrer les données
                  de la base de données. Nous rassemblons et affinons les
                  spécifications et les exigences en fonction des besoins
                  techniques. Créer et maintenir la documentation du logiciel.
                  <br />
                  Enfin, nous restons connectés avec les technologies émergentes
                  / les tendances de l'industrie et les appliquer aux opérations
                  et aux activités.
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
