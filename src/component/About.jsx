import React from 'react'


function About() {
  return (
    <>
      <div className="trainer">
        <div className="about">
          <h2 data-aos="fade-up">Hello, We are Gymso</h2>
          <p data-aos="fade-up">
            <center><h3>About Gymso Fitness</h3> </center>
           
            

            Gymso Fitness is more than just a gym; it's a haven for wellness seekers in [location]. Our modern facility boasts top-of-the-line equipment, diverse group fitness classes led by certified instructors, and personalized training options. We prioritize community and support, offering a welcoming atmosphere for individuals of all fitness levels. With convenient hours and a holistic approach to health, Gymso Fitness is your partner in achieving your fitness goals and enhancing your overall well-being. Join us and experience the power of strength and serenity at Gymso Fitness today.
            <br />
            <br/>
            <center><h3>Join us today</h3> </center>

            Ready to embark on your fitness journey? Sign up for a membership at Gymso Fitness and discover the transformative power of strength and serenity. Whether you're looking to build muscle, improve flexibility, or simply de-stress, we're here to support you every step of the way. Get started today and unlock a healthier, happier you at Gymso Fitness.

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

    </>
  )
}

export default About