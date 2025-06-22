import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);


  const handleLinkClick = () => setShowMenu(false);

  const links = [
    { to: "/", label: "Home", icon: "home-alt" },
    { to: "/about", label: "About", icon: "user" },
    { to: "/skills", label: "Skills", icon: "file-alt" },
    { to: "/blog", label: "Blog", icon: "document-layout-center" },
    { to: "/portfolio", label: "Portfolio", icon: "scenery" },
    { to: "/contact", label: "Contact", icon: "message" },
  ];

  return (
    <header className='header' id="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Aditya Kumar
        </NavLink>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {links.map(({ to, label, icon }) => (
              <li className="nav__item" key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `nav__link${isActive ? " active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  <i className={`uil uil-${icon} nav__icon`} /> {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={() => setShowMenu(false)}></i>
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" onClick={() => setShowMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
