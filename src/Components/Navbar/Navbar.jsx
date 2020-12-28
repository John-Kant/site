import React from "react";
const Navbar = () => {
  const [height, setHeight] = React.useState(0);
  const [toggler, setToggler] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });

    return () => window.removeEventListener("scroll", () => {});
  });

  const handleToggler = () => {
    setToggler(!toggler);
  };
  return (
    <nav className={height > 20 ? "navbar sticky " : "navbar goTop"}>
      <div className="inner-width">
        <a href="#" className="logo" />
        <button
          className={toggler ? "active menu-toggler" : "menu-toggler"}
          onClick={handleToggler}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={toggler ? "active navbar-menu" : "navbar-menu"}
          onClick={handleToggler}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#education">Education</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
