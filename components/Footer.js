import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Aditya Kumar</h1>
            <span className="footer__subtitle"> Software Developer</span>
          </div>
<ul className="footer__links">
            <li>
              <Link to="/blog" className="footer__link">Services</Link>
            </li>
            <li>
              <Link to="/portfolio" className="footer__link">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">Contact</Link>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/adityamaxjee"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/aditya._.kumar10/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Aditya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
