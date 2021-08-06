import React from 'react';
import Navbar from '../Navbar';
import './Booking.css';
import { ReactComponent as Face } from '../assets/face.svg';

function Booking() {
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

        <div className='time-fee'>
          <div className='date-time'>
            <p className='bold'>date & time</p>
            <p className='date-cap'>Tommorrow,27 Jan</p>
            <p className='date-cap'>11.00 AM</p>
          </div>

          <div className='fee'>
            <p className='fee-name'>Consultation Fees</p>
            <p className='money-cap'>$600</p>
          </div>
        </div>

        <div className='form'>
          <input
            type='text'
            className='input-field'
            name='name'
            placeholder='Name'
          />
          <input
            type='email'
            className='input-field'
            name='email'
            placeholder='E-mail'
          />
          <input
            type='text'
            className='input-field'
            name='number'
            placeholder='Number'
          />
        </div>
        <div className='condition'>
          <p>By booking this appointment you agree to the T&C</p>
        </div>

        <div className='center-btn'>
          <button className='btn-confirm'>Confirm Booking</button>
        </div>
      </div>
    </>
  );
}

export default Booking;
