import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './TimeSlot.css';
import { ReactComponent as Face } from '../assets/face.svg';

function TimeSlot() {
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
          <Link to='/Profile'>
            <button className='left_button '>
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
          </Link>
          <p className='date_bold'>Tomorrow, 27 January</p>
          <Link to='/Booking'>
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

        <div className='day_shift'>
          <div className='day_time'>
            <div className='tag morning'>Morning</div>
            <div className='timer'>
              <p>10:00</p>
              <p>11:00</p>
              <p>12:00</p>
            </div>
          </div>

          <div className='day_time'>
            <div className='tag afternoon'>Afternoon</div>
            <div className='timer'>
              <p>12:00</p>
              <p>01:00</p>
              <p>02:00</p>
              <p>03:00</p>
              <p>04:00</p>
            </div>
          </div>

          <div className='day_time'>
            <div className='tag evening'>Evening & Night</div>
            <div className='timer'>
              <p>05:00</p>
              <p>06:00</p>
              <p>07:00</p>
              <p>08:00</p>
              <p>09:00</p>
              <p>10:00</p>
            </div>
          </div>
        </div>

        <div className='center-btn'>
          <Link to='/Booking'>
            <button className='btn-time'>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TimeSlot;
