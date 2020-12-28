import React from "react";

// components

import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import BackToTop from "./Components/BackToTopButton"

function App() {
  return (
    <>
      <BackToTop />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
