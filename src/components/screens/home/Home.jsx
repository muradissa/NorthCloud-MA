import React from 'react'
import Navbar from '../../global/Navbar'
import Body from '../Body'
import Footer from '../../global/Footer'

function Home() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Body/>
        </div>
        {/* <div>
            Examples
        </div>
        <div>
            what we can do
        </div>
        <div>
            Contact Us
        </div> */}
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home