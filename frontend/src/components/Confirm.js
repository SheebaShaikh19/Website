import React from 'react';
import './Confirm.css';

export default function Confirm() {
  return (
    <div className='confirm-container'>
      <h1 className='confirm-title'>Booking Confirmed!</h1>
      <p className='confirm-message'>Thank you for your booking. Your reservation has been successfully confirmed.</p>
      <p className='confirm-instructions'>We look forward to seeing you. If you have any questions, feel free to contact us.</p>
    </div>
  );
}
