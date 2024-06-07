import React from 'react'


function Home() {
  return (

    <>
      <div>

        <div id="home" className="back">
          <div className="overlay"></div>
        </div>
        <div className="mid">
          <p>new way to build a healthy lifestyle!</p>
          <h2>UPGRADE YOUR BODY AT GYMSO FITNESS</h2>
          <div className="btn">
            <a className="simple" href="#">Get started</a>
            <a className="border" href="#">Lean More</a>
          </div>
        </div>
        <div className="details">
          <div className="one" data-aos="fade-up">
            <h3>New to the gymso?</h3>
            <h6>Your membership is up to 2 months FREE ($62.50 per month)</h6>
            <p>
              Gymso is free HTML template by Tooplate for your commercial website.
              Bootstrap v4.2.1Layout. Feel free to use it.
            </p>
            <a href="#">Become a member today</a>
          </div>
          <div className="two" data-aos="fade-up">
            <h3>Working hours</h3>
            <br />
            <h5>Sunday : Closed</h5>
            <h5>Monday - Friday</h5>
            <p>7:00 AM - 10:00 PM</p>
            <br />
            <h5>Monday - Friday</h5>
            <p>7:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="trainer">
          <div className="about">
            <h2 data-aos="fade-up">Hello, We are Gymso</h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
              natus dignissimos doloremque ut ratione consequuntur praesentium
              repellat mollitia veniam, nulla voluptates culpa expedita! Aspernatur
              iste sequi voluptate sapiente, aliquid tempore.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
              provident autem nulla, quidem minus accusantium?
            </p>
          </div>
          <div className="people" data-aos="fade-up">
            <div className="team1">
              <div className="img"><img src="./img/team1.jpg" /></div>
              <div className="teamDetails">
                <div className="name">
                  <h4>Maya yan</h4>
                  <i className="fa-brands fa-square-facebook"></i>
                </div>
                <div className="pro">
                  <p>Yoga Instructor</p>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
            <div className="team1">
              <div className="img"><img src="./img/team2.jpg" /></div>
              <div className="teamDetails">
                <div className="name">
                  <h4>Maya yan</h4>
                  <i className="fa-brands fa-square-facebook"></i>
                </div>
                <div className="pro">
                  <p>Yoga Instructor</p>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="classNamees" className="class">
          <p className="paragraph" data-aos="fade-up">Get A Perfect Body</p>
          <h2 className="h2" data-aos="fade-up">Our Training classNameses</h2>
          <div className="classNameMenu">
            <div className="team1" data-aos="fade-up">
              <div className="img"><img src="./img/class1.jpg" /></div>
              <div className="teamDetails">
                <div className="name">
                  <div className="nameDetails">
                    <h4>Maya yan</h4>
                    <p>Trained by - <span>Bella</span></p>
                  </div>
                  <div className="num">
                    <h5>$30</h5>
                  </div>
                </div>
                <div className="pro">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                    Quam, ad.
                  </p>
                </div>
              </div>
            </div>
            <div className="team1" data-aos="fade-up">
              <div className="img"><img src="./img/class2.jpg" /></div>
              <div className="teamDetails">
                <div className="name">
                  <div className="nameDetails">
                    <h4>Maya yan</h4>
                    <p>Trained by - <span>Bella</span></p>
                  </div>
                  <div className="num">
                    <h5>$42</h5>
                  </div>
                </div>
                <div className="pro">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                    Quam, ad.
                  </p>
                </div>
              </div>
            </div>
            <div className="team1" data-aos="fade-up">
              <div className="img"><img src="./img/class3.jpg" /></div>
              <div className="teamDetails">
                <div className="name">
                  <div className="nameDetails">
                    <h4>Maya yan</h4>
                    <p>Trained by - <span>Bella</span></p>
                  </div>
                  <div className="num">
                    <h5>$26</h5>
                  </div>
                </div>
                <div className="pro">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                    Quam, ad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <i className="fa-solid fa-location-dot"></i> Roxy pull lashkar Gwalior Madhya Paradesh  pin cod-474004.
            </p>
            <div className="bg-white p-4 mb-3">
              <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3024.195431214591!2d-74.0110605!3d40.71371409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699705208279!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>






      </div>
    </>

  )
}

export default Home