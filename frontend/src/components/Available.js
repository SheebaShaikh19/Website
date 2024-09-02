import React, { useState } from 'react';
import './Available.css';
import { useNavigate } from 'react-router-dom';

export default function Available() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setC_no] = useState("");
  const [booking_date, setbdate] = useState("");
  const [booking_time, setbtime] = useState("");
  const [end_date, setedate] = useState("");
  const [end_time, setetime] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const addUser = {
      name,
      email,
      contact_number: contact_no,  // Update the key name to match the server-side expectation
      booking_date,
      booking_time,
      end_date,
      end_time
    };

    try {
      const response = await fetch("http://localhost:5001", {
        method: "POST",
        body: JSON.stringify(addUser),  // Fixed typo "bosy" to "body"
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      } else {
        console.log(result);
        setError("");  // Clear the error if the submission is successful
        setName("");
        setEmail("");
        setC_no("");
        setbdate("");
        setbtime("");
        setedate("");
        setetime("");
        navigate('/confirm');
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className='bg-avail'>
        <h2 className='text-center'>Room Booking Form</h2>
        <form className='booking-form' onSubmit={handleSubmit}>
          <div className='date-time-group'>
            <div className='date-time'>
              <label htmlFor="booking-date">Booking Start Date:</label>
              <input
                type="date"
                id="booking-date"
                name="booking_date"
                value={booking_date}
                onChange={(e) => setbdate(e.target.value)}
                required
              />
            </div>
            <div className='date-time'>
              <label htmlFor="booking-time">Booking Start Time:</label>
              <input
                type="time"
                id="booking-time"
                name="booking_time"
                value={booking_time}
                onChange={(e) => setbtime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='date-time-group'>
            <div className='date-time'>
              <label htmlFor="end-date">Booking End Date:</label>
              <input
                type="date"
                id="end-date"
                name="end_date"
                value={end_date}
                onChange={(e) => setedate(e.target.value)}
                required
              />
            </div>
            <div className='date-time'>
              <label htmlFor="end-time">Booking End Time:</label>
              <input
                type="time"
                id="end-time"
                name="end_time"
                value={end_time}
                onChange={(e) => setetime(e.target.value)}
                required
              />
            </div>
          </div>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter the name....'
            required
          /><br /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter the email....'
            required
          /><br /><br />

          <label htmlFor="contact-number">Contact Number:</label>
          <input
            type="tel"
            id="contact-number"
            name="contact_no" // Updated to match the state variable
            value={contact_no}
            onChange={(e) => setC_no(e.target.value)}
            placeholder='Enter Contact no....'
            pattern="[0-9]{10}"
            required
          /><br /><br />

          <center><button type="submit">Submit</button></center>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
}
