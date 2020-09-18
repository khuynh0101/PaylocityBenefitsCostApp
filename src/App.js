import React from 'react';
import styles from './app.module.css';
import { Employee } from './components/Employee/Employee';

const App = () => {
  return (
    <div className={styles.container}>
      <div className='logo'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xlink='http://www.w3.org/1999/xlink'
          width='220.002'
          height='51.78'
          viewBox='0 0 363.26 100.17'
        >
          <defs>
            <linearGradient
              id='linear-gradient'
              x1='81.68'
              y1='66.43'
              x2='2.33'
              y2='66.43'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#ff8f1c'></stop>
              <stop offset='1' stopColor='#ed2024'></stop>
            </linearGradient>
            <linearGradient
              id='linear-gradient-2'
              x1='915.44'
              y1='-1512.87'
              x2='836.09'
              y2='-1512.87'
              gradientTransform='rotate(180 460.08 -746.685)'
              href='#linear-gradient'
            ></linearGradient>
          </defs>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
              <path
                className='logotag'
                d='M186.34 83.69v4.16h4.8v1.87h-4.8v5.81h-2.05V81.82h8.1v1.87zM193.13 90.86a4.89 4.89 0 019.77 0 4.89 4.89 0 01-9.77 0zm7.82 0a2.94 2.94 0 10-2.95 3 2.91 2.91 0 003-3zM211.37 86.38l-.37 1.85a3.24 3.24 0 00-1.37-.32c-1.69 0-2.49 1.77-2.49 4.28v3.34h-2v-9.29h2v2.09c.48-1.63 1.42-2.29 2.61-2.29a3.55 3.55 0 011.62.34zM226.71 86.24l-3.4 9.29h-1.65l-2.41-6.66-2.33 6.66h-1.61l-3.52-9.29h2.11l2.23 6.35 2.21-6.35h1.83l2.22 6.35 2.21-6.35zM237.46 86.24v9.29h-2v-1.39a3.7 3.7 0 01-3.21 1.59 4.85 4.85 0 010-9.69 3.67 3.67 0 013.23 1.57v-1.37zm-2 4.62a3 3 0 00-3-3 2.86 2.86 0 00-2.88 3 2.93 2.93 0 105.85 0zM246.53 86.38l-.34 1.85a3.31 3.31 0 00-1.37-.32c-1.7 0-2.49 1.77-2.49 4.28v3.34h-2v-9.29h2v2.09c.48-1.63 1.41-2.29 2.61-2.29a3.58 3.58 0 011.59.34zM257.13 81.21v14.32h-1.95v-1.39a3.68 3.68 0 01-3.2 1.59A4.85 4.85 0 01252 86a3.65 3.65 0 013.22 1.57v-6.4zm-2 9.65a2.94 2.94 0 00-3-3 2.87 2.87 0 00-2.89 3 2.93 2.93 0 105.85 0zM273.47 83.69h-4.08v11.84h-2.05V83.69h-4.08v-1.87h10.21zM273 90.86a4.89 4.89 0 019.77 0 4.89 4.89 0 01-9.77 0zm7.82 0a2.94 2.94 0 10-3 3 2.91 2.91 0 002.97-3zM294.24 86.24v7.9c0 4.32-2 6-5.12 6a4.78 4.78 0 01-4.26-2.57l1.66-.81a3 3 0 002.6 1.57c1.95 0 3.17-1.12 3.17-4.06v-.12a3.81 3.81 0 01-3.21 1.55 4.85 4.85 0 010-9.69 3.75 3.75 0 013.23 1.55v-1.32zm-2 4.62a3 3 0 00-3-3 2.86 2.86 0 00-2.88 3 2.93 2.93 0 105.85 0zM306 91.67h-7.4a2.64 2.64 0 002.89 2.25 3 3 0 002.6-1.31l1.56.77a4.87 4.87 0 11-4.31-7.38 4.52 4.52 0 014.65 4.8c.01.3.01.58.01.87zm-2-1.57a2.49 2.49 0 00-2.68-2.25 2.6 2.6 0 00-2.79 2.25zM312.84 87.87h-2v7.66h-2v-7.66h-1.67v-1.63h1.67v-3.48h2v3.48h2zM323.38 90.22v5.31h-1.95v-5.17a2.13 2.13 0 00-2.11-2.36 2.5 2.5 0 00-2.68 2.61v5h-1.95v-14.4h1.95v6.44a3.44 3.44 0 013-1.61c2.36-.04 3.76 1.53 3.74 4.18zM335 91.67h-7.4a2.63 2.63 0 002.88 2.25 3 3 0 002.61-1.31l1.55.77a4.86 4.86 0 11-4.28-7.38 4.52 4.52 0 014.66 4.8c-.02.3-.02.58-.02.87zm-1.91-1.57a2.49 2.49 0 00-2.69-2.25 2.59 2.59 0 00-2.78 2.25zM343.46 86.38l-.34 1.85a3.31 3.31 0 00-1.38-.32c-1.69 0-2.48 1.77-2.48 4.28v3.34h-2v-9.29h2v2.09c.47-1.63 1.41-2.29 2.6-2.29a3.6 3.6 0 011.6.34zM343.38 94.42a1.38 1.38 0 111.37 1.31 1.33 1.33 0 01-1.37-1.31z'
              ></path>
              <path d='M196.57 43.53l-6.21-15.43h-10.5l11.78 26.32-7.37 18.26h10.12l18.45-44.58h-10.19zm19 14.42H225V12.34h-9.48zm29.19-30.62a15.65 15.65 0 00-16.2 15.08v.55a15.64 15.64 0 0015.7 15.57h.51A15.69 15.69 0 00261 43.42v-.46a15.7 15.7 0 00-15.77-15.64h-.5m0 22.42a6.49 6.49 0 01-6.61-6.35v-.44a6.53 6.53 0 016.2-6.85h.4a6.53 6.53 0 016.6 6.47v.39a6.47 6.47 0 01-6.16 6.78h-.43m35.8-13.65a7.26 7.26 0 015.7 2.89l7.3-4.62a15.38 15.38 0 00-13.06-7c-8.71 0-16.46 6.08-16.46 15.56s7.75 15.63 16.46 15.63a15.38 15.38 0 0013.06-7l-7.29-4.62a7.27 7.27 0 01-5.7 2.89 6.57 6.57 0 01-6.91-6.22v-.64a6.56 6.56 0 016.31-6.79h.61m21.24-23.56a5.67 5.67 0 00-5.91 5.39 5.76 5.76 0 005.9 5.51 5.65 5.65 0 005.75-5.51 5.58 5.58 0 00-5.63-5.51h-.13M297 58h9.48V28.1H297zm19.22-40.61V28.1h-5.44v7.11h5.44V58h9.48V35.21h7.79l8.6 19.21-7.37 18.25h10.13l18.41-44.57h-10.19L347 43.53l-6.23-15.43h-15.11V17.34zm-189.42 10a12 12 0 00-9.22 4V28.1h-9.48v44.58h9.48V54.55a12.12 12.12 0 009.22 3.9 14.74 14.74 0 0014.56-14.92v-.64a14.78 14.78 0 00-14-15.54h-.56m-2 22.35a6.76 6.76 0 116.91-6.79 6.9 6.9 0 01-6.91 6.79m42.91-18.31a12.1 12.1 0 00-9.29-4 14.73 14.73 0 00-14.49 15v.59a14.74 14.74 0 0013.87 15.53h.6a12.1 12.1 0 009.28-4V58h9.42V28.1h-9.42zm-7.24 18.31a6.72 6.72 0 116.83-6.7 6.85 6.85 0 01-6.86 6.72'></path>
              <path
                d='M0 47.57v-.08a.5.5 0 01.43-.55h27.68a.44.44 0 01.4.36c5.3 20.08 10.33 26.78 14.69 26.78 6.06 0 10.82-13 13.17-21 .17-.58.91-.35.81.26-5 32.61-20 32.61-24.82 32.61C17.28 85.93 4.49 69.84 0 47.57zm86.38-.14a.47.47 0 00-.44-.49H61.25a.44.44 0 00-.41.43C59.12 64.53 54.74 77 47.2 83.93a.54.54 0 000 .77.48.48 0 00.16.12 22.46 22.46 0 006.71 1.06c15.14 0 27.93-16.37 32.33-38.45z'
                fill='url(#linear-gradient)'
              ></path>
              <path
                d='M86.38 38.36a.64.64 0 000 .07.49.49 0 01-.38.57H58.29a.42.42 0 01-.4-.35c-5.3-20.1-10.33-26.8-14.69-26.8-6.06 0-10.82 13-13.17 21-.17.58-.91.35-.81-.26C34.23 0 49.24 0 54 0c15.12 0 27.91 16.09 32.38 38.36zM0 38.49a.47.47 0 00.43.5h24.71a.45.45 0 00.42-.43C27.28 21.4 31.66 8.88 39.2 2a.53.53 0 000-.76.48.48 0 00-.16-.12 22.16 22.16 0 00-6.7-1.07C17.19.05 4.4 16.42 0 38.49z'
                fill='url(#linear-gradient-2)'
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.contentContainer}>
        <h4>Employee Benefits Cost Calculator</h4>
        <div>
          <Employee />
        </div>
      </div>
    </div>
  );
};

export default App;
