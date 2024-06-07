import React from 'react'

function Contect() {
  return (
   <>
    <div id="contact" className="contact">
          <div className="form">
            <h2 data-aos="fade-up">Feel free to ask anything</h2>
            <div className="submit" data-aos="fade-up">
              <input type="text" name="" placeholder="Name" />
              <input type="email" name="" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <a href="#"> Send Message</a>
            </div>
          </div>
          <div className="map" data-aos="fade-up">
            <h2>Where You can find Us</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i>Roxy pull lashkar Gwalior Madhya Paradesh  pin cod-474004.
            </p>
            
            <div className="bg-white p-4 mb-3">
                <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3024.195431214591!2d-74.0110605!3d40.71371409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699705208279!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
          </div>
        </div>


   </>
  )
}

export default Contect