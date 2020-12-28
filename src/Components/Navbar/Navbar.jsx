import React from 'react'
// import $ from 'jquery'
function Navbar() {

    return (
        <div>
        <nav className="navbar">
            <div className="inner-width">
                <a href="#" className="logo" />
                <button className="menu-toggler">
                    <span />
                    <span />
                    <span />
                </button>
                <div className="navbar-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#education">Education</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
        </div>

    )
}

export default Navbar;
