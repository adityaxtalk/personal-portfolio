import React from "react";
import adityaImage from "url:../assets/aditya2.jpg"; 
import Qualification from "../components/Qualification";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={adityaImage} alt="Aditya" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              I'm a <strong>Software Engineer</strong> with 3+ years of
              experience in full-stack development — passionate about building
              scalable, user-focused web applications.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">48+</span>
                <span className="about__info-name">
                  Months <br /> experience
                </span>
              </div>
              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">
                  Completed <br /> Projects
                </span>
              </div>
              <div>
                <span className="about__info-title">01</span>
                <span className="about__info-name">
                  Internship <br /> Completed
                </span>
              </div>
            </div>
            <ul className="about__highlights">
              <li>
                🚀 <strong>Frontend:</strong> Built dynamic, responsive SPAs
                using <strong>React</strong> with reusable components,
                accessibility, and performance best practices.
              </li>
              <li>
                🛠️ <strong>Backend:</strong> Developed RESTful APIs using{" "}
                <strong>Node.js</strong> and <strong>ASP.NET Core</strong> with
                robust routing and clean code architecture.
              </li>
              <li>
                🎯 <strong>UI/UX:</strong> Improved user experience by
                modernizing interfaces, fixing styling issues, and enhancing
                responsiveness across platforms.
              </li>
              <li>
                🧠 <strong>Projects:</strong> Built real-time apps, content
                rendering systems, and predictive tools using real-world
                problem-solving approaches.
              </li>
              <li>
                📈 <strong>Approach:</strong> Focused on clean code, component
                reusability, performance optimization, and continuous learning.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Qualification />
    </>
  );
};

export default About;
