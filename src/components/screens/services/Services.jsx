import React from 'react'
import './Services.css'

function Services() {
  return (
    <section className="services">

        <h2 style={{width:"100%",minWidth:""}}>Our Services</h2>

        <div className='cards'>    
          <div className="service-card">
            <img src='./images/Website-App2.gif' className='service-card-img' alt=""/>
            <h3>Website Development</h3>
            <p>We create stunning and responsive websites tailored to your needs.</p>
          </div>
          <div className="service-card">
            <img src='./images/Mobile-App.gif' className='service-card-img' alt=""/>
            <h3>Mobile App Development</h3>
            <p>Turn your ideas into reality with our cutting-edge mobile applications.</p>
          </div>
          <div className="service-card">
            <img src='./images/service.gif' className='service-card-img' alt=""/>
            <h3>Software Solutions</h3>
            <p>Explore our innovative software solutions to streamline your business processes.</p>
          </div>
        </div>

      </section>
  )
}

export default Services