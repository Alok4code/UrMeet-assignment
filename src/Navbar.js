import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <div className='Navbar'>
        <div className='header'>
          <NavLink to='/'>
            <svg
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.077 15.2L9.34 14L3.43301 8.44H16.133V6.75098H3.43301L9.34 1.19098L8.077 0L0 7.59998L8.077 15.2Z'
                fill='white'
              />
            </svg>
          </NavLink>
          <h5 className='text-header'>Select a time slot</h5>
          <svg
            width='20'
            height='20'
            viewBox='0 0 8 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.78893 0.462013C5.82203 0.428832 5.84061 0.383879 5.84061 0.337013C5.84061 0.290147 5.82203 0.245194 5.78893 0.212013C5.75575 0.178916 5.7108 0.160328 5.66393 0.160328C5.61706 0.160328 5.57211 0.178916 5.53893 0.212013L3.34093 2.41001L1.14093 0.210014C1.10725 0.179561 1.06316 0.163212 1.01777 0.164352C0.972379 0.165493 0.929163 0.184035 0.897057 0.216141C0.864951 0.248247 0.846411 0.291463 0.845271 0.336853C0.84413 0.382243 0.860477 0.426337 0.89093 0.460014L3.21593 2.78901C3.24911 2.82211 3.29406 2.8407 3.34093 2.8407C3.3878 2.8407 3.43275 2.82211 3.46593 2.78901L5.78893 0.462013Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </>
  );
}
