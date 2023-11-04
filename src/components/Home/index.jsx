import React, { useEffect, useCallback, useState } from 'react';
import homeData from '../../data/portfolio.json';
import '../../styles/index.scss';
import './index.scss';
import { NavLink } from 'react-router-dom';
import useAnimationFrame from '../../hooks/useAnimationFrame';

const Home = () => {
  const [animatedButton, setAnimatedButton] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const animationCallback = useCallback((deltaTime) => {
    setElapsedTime((prev) => prev + deltaTime);
  }, []);

  useAnimationFrame(animationCallback, 2000);

  useEffect(() => {
    if (animatedButton < 3 && elapsedTime > 1000 * animatedButton) {
      setAnimatedButton(animatedButton + 1);
    }
  }, [elapsedTime, animatedButton]);

  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="text-wrapper">
              <h1 className="heading-primary">{homeData.home.salute}</h1>
              <h2 className="heading-primary">{homeData.home.name}</h2>
              <h1 className="heading-secondary">
                <span className="heading-secondary-main">
                  {homeData.home.about}
                </span>
              </h1>
              <div className="text-primary">
                <p>{homeData.home.btnTitle}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="btn-wrapper">
              <div
                className={`round__btn ${
                  animatedButton >= 1
                    ? 'animate__animated animate__rubberBand'
                    : ''
                }`}
              >
                <NavLink to="/portfolio" className="round__btn--text">
                  Portfolio
                </NavLink>
              </div>

              <div
                className={`round__btn ${
                  animatedButton >= 2
                    ? 'animate__animated animate__rubberBand'
                    : ''
                }`}
              >
                <NavLink to="/about" className="round__btn--text">
                  About me
                </NavLink>
              </div>
              <div
                className={`round__btn ${
                  animatedButton >= 3
                    ? 'animate__animated animate__rubberBand'
                    : ''
                }`}
              >
                <NavLink to="/contact" className="round__btn--text">
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
