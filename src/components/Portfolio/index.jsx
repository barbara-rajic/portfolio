import React from 'react';
import portfolioData from '../../data/portfolio.json';
import { GithubIcon } from '../Icons';
import '../../styles/index.scss';
import './index.scss';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="heading-secondary">
              <span className="heading-secondary-main">Portfolio</span>
            </h1>
          </div>
          <div className="col-12">
            <div className="portfolio__content-container">
              {portfolioData.portfolio.map((item, index) => (
                <div className="portfolio__content-wrapper" key={index}>
                  <div className="portfolio__content-polaroid">
                    <div className="portfolio__content-img">
                      <img src={item.cover} alt={item.title} />
                    </div>
                  </div>
                  <div className="portfolio__content-details">
                    <div className="portfolio__content-text-wrapper">
                      <h3 className="text-secondary">
                        <a
                          href={item.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title} <GithubIcon />
                        </a>
                      </h3>

                      <p className="text-secondary">{item.description}</p>
                      <p className="text-secondary">
                        Built with: {item.Languages}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
