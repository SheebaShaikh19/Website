import React from 'react';
import './About.css'; // Ensure you have a CSS file for styling
import insta from './insta.png'
import you from './youtube.jpg'
import link from './linked.png'
export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to [Hotel Name], where luxury meets comfort in the heart of [Location]. Established in [Year], our hotel has been a beacon of elegance and hospitality, offering guests a memorable experience with every stay.
        </p>
        <p>
          From our humble beginnings, we have grown into a premier destination for travelers seeking exceptional service and unparalleled amenities. Our team is dedicated to making every guest feel at home, ensuring a stay that is both relaxing and enjoyable.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At [Hotel Name], our mission is to provide an extraordinary experience that exceeds expectations. We strive to create a welcoming environment where every guest feels valued and appreciated. Our commitment to excellence is reflected in our attentive service, comfortable accommodations, and attention to detail.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Hospitality:</strong> We believe in providing genuine and heartfelt service.</li>
          <li><strong>Integrity:</strong> We are committed to honesty and transparency in all our interactions.</li>
          <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
          <li><strong>Community:</strong> We value our role in the local community and seek to make a positive impact.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Follow Us On:</h2>
        <ul className='aclass'>
        <li><a href="" ><img src={insta}/></a></li>
         <li><a href=""><img src={you}/></a></li>
          <li><a href=""><img src={link}/></a></li>
        </ul>
      </section>
    </div>
  );
}
