import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div>
            <div className="nav">
          <h2>Gymso Fitness</h2>
          <ul id="item">
          <li><Link to="/" className=" nav-link">Home</Link></li>
          <li><Link to="/about" className=" nav-link">About</Link></li>
          <li><Link to="/classname" className=" nav-link">className</Link></li>
          <li><Link to="/contect" className=" nav-link">Contect</Link></li>
          <li><Link to="/login" className=" nav-link">Login</Link></li>
            <div className="icon">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </ul>
          <i id="bar" className="fa-solid fa-bars"></i>
        </div>

            </div>

        </>

    )
}

export default Header