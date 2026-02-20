import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="qualification__section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
          <div
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Work
          </div>
        </div>

        <div className="qualification__sections">
          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="education"
                className="qualification__content qualification__active"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">B.E. (Computer Science Engineering)</h3>
                    <span className="qualification__subtitle">Dr. D.Y. Patil Institute of Technology</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2017 - 2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Higher Secondary School</h3>
                    <span className="qualification__subtitle">Indirapuram Public School</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2015 - 2017
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Senior Secondary School</h3>
                    <span className="qualification__subtitle">Indirapuram Public School</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2013 - 2015
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'work' && (
              <motion.div
                key="work"
                className="qualification__content qualification__active"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Internship</h3>
                    <span className="qualification__subtitle">C.D.A.C, Pune</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Sep, 2020 - May, 2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Trainee Engineer</h3>
                    <span className="qualification__subtitle">UST BlueConch, Pune</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Jul, 2021 - Jan, 2022
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Associate Software Engineer</h3>
                    <span className="qualification__subtitle">UST BlueConch, Pune</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Feb, 2022 - Oct, 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Software Engineer</h3>
                    <span className="qualification__subtitle">UST BlueConch, Pune</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Oct, 2022 - Sep, 2023
                    </div>
                  </div>
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Software Developer</h3>
                    <span className="qualification__subtitle">SNP Technologies Inc., Hyderabad</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Sep, 2023 - Feb, 2026
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
