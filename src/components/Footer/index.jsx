import React from 'react';
import footerData from '../../data/portfolio.json';
import { ArrowIcon, GithubIcon } from '../Icons';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__content-title">
          Follow me <ArrowIcon />{' '}
          <a
            href={footerData.footer.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
