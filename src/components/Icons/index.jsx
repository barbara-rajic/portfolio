import React from 'react';
import './index.scss';

export const CloseIcon = () => (
  <svg
    className={`icon close-icon`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
);

export const MenuIcon = () => (
  <svg
    className={`icon menu-icon`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
  </svg>
);

export const GithubIcon = () => (
  <svg
    className="icon github-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 -10 25 25"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.69-.01-1.35-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.22.82 1.22.82.71 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 012-.27c.68.01 1.36.09 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.66 3.94.29.25.54.73.54 1.47 0 1.06-.01 1.91-.01 2.17 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

export const ArrowIcon = () => (
  <svg
    className="icon arrow-icon"
    width="48"
    height="24"
    viewBox="0 0 48 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46 12H2m44 0-6 6m6-6-6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
