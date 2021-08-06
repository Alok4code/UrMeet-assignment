import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Profile.css';
import { ReactComponent as Face } from '../assets/face.svg';

function Profile() {
  return (
    <>
      <Navbar />
      <div className='name_card'>
        <div className='card_header'>
          <div>
            <Face />
          </div>
          <div className='title'>
            <p className='text_name'>Dr Jitendra Raut</p>
            <p className='text_job '>MA.BL- Corporate Lawyer</p>
          </div>
        </div>
        <div className='date_slider'>
          <button className='left_button inactive'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.14392 9.61096L1.95292 5.63596L6.14392 1.63396'
                stroke='#313450'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
          <p className='date_bold'>Today, 26 January</p>
          <Link to='/TimeSlot'>
            <button className='right_button'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.61011 1.38904L5.54321 5.36404L1.61011 9.36404'
                  stroke='#313450'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className='date_available'>
          <p>No slots available for today</p>
        </div>

        <div>
          <Link to='/TimeSlot'>
            <button className='btn btn-primary'>
              Next day avaibility on Sun, 09
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
