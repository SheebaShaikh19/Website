import React from 'react';
import bg from './bg3.avif';
import './Home.css';
import { useNavigate } from 'react-router-dom';
export default function Home() {
const navigate=useNavigate();
  const HandleSubmit=()=>{
    navigate('/book');
  }
  return (
    <div className='home-container'>
      <img src={bg} className='bghome' alt='Background' />
      <div className='content-overlay'>
        <div className='content1'>
        
        <h1 className='playfair-display-bold'>Cloud Mist </h1>
        <h2 className='playfair-display'>Resort & Spa</h2>
          <p className='playfair-display-italic'>The Perfect Base For You</p>
          <button type="button" onClick={HandleSubmit} className="btn btn-secondary">Book Now</button>
          
        </div>
      </div>
    </div>
  );
}
