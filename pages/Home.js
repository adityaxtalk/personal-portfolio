import React from "react";
import adityaImage from "url:../assets/aditya.jpg";
import resumePDF from "url:../assets/Aditya_Kumar_Resume.pdf";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/aditya-kumar-2581b316a/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/adityaxtalk"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image className="home__blob-img" x="" href={adityaImage} />
              </g>
            </svg>
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Aditya Kumar</h1>
            <h3 className="home__subtitle">Software Developer</h3>
            <p className="home__description">
              Passionate about crafting clean, scalable web applications with
              modern technologies. I thrive on solving real-world problems
              through code and continuously evolving my skills across the
              frontend and backend.
            </p>

            <div className="home__button-group">
              <Link to="contact" className="button button--flex home__button">
                Contact Me <i className="uil uil-message button__icon"></i>
              </Link>

              <a
                href={resumePDF}
                download
                className="button button--flex home__button download"
              >
                Download Resume <i className="uil uil-import button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
