import React from 'react';
// import Navbar from './Navbar'; // Assuming you have a Navbar component
import Navbar from '../global/Navbar'
import Part1 from './part1/Part1';

import Contact from './contact/Contact';

import Services from './services/Services';
import Footer from '../global/Footer'
import './Body.css'
const Body = () => {

  return (
    <div>
        {/* <div>
            Examples
        </div>
        <div>
            what we can do
        </div>
        <div>
            Contact Us
        </div> */}
        
      {/* <Navbar /> */}

      <section className="hero">
        {/* <div className="hero-content">
          <h1>Welcome to NorthCloud</h1>
          <p>Your Hi-Tech Solution Provider</p>
        </div> */}
        <Part1></Part1>

      </section>
      <Services/>
      <Contact/>
      {/* <section className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Website Development</h3>
          <p>We create stunning and responsive websites tailored to your needs.</p>
        </div>
        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Turn your ideas into reality with our cutting-edge mobile applications.</p>
        </div>
        <div className="service-card">
          <h3>Software Solutions</h3>
          <p>Explore our innovative software solutions to streamline your business processes.</p>
        </div>
      </section> */}
{/* 
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Ready to get started? Reach out to us for a consultation.</p>
      </section> */}

    </div>
  );
};

export default Body;
