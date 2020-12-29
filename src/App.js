import React from "react";

// components

import Navbar from "./Components/English/Navbar/Navbar";
import Home from "./Components/English/Home/Home";
import About from "./Components/English/About/About";
import Services from "./Components/English/Services/Services";
import Contact from "./Components/English/Contact/Contact";
import Footer from "./Components/English/Footer/Footer";
import BackToTop from "./Components/English/BackToTopButton";
import ProviderComponent from "./Components/ProviderComponent";

function App() {
  return (
    <>
      <BackToTop />
      <Navbar />
    </>
  );
}

export default App;
