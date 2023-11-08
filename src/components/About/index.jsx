import React from 'react';
import aboutData from '../../data/portfolio.json';
import '../../styles/index.scss';
import './index.scss';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <h1 className="heading-secondary">
              <span className="heading-secondary-main">About me</span>
            </h1>
          </div>
          <div className="about__content-main col-12">
            <div className="about__content-details">
              <p className="text-primary">{aboutData.about.description}</p>
            </div>
            <div className="btn-wrapper">
              <div className="round__btn">
                <NavLink to="/portfolio" className="round__btn--text">
                  Portfolio
                </NavLink>
              </div>
            </div>
          </div>
          <div className="about__content-skills col-12">
            <h3 className="about__content-title">
              {aboutData.about.skillsTitle}
            </h3>
            <div className="skills btn-wrapper">
              {aboutData.about.skillsDescriptiont.map((skill, index) => (
                <div className="skills__skill elipse__btn" key={index}>
                  <span className="elipse__btn--text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
