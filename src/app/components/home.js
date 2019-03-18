import React from 'react';
import '../assets/css/main.css';

import { Link } from 'react-router-dom';

const Home = () => (
  <div className="body-image">
    <nav className="navcolor">
      <div id="logo">
        <Link to="/">My Diary</Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="banner">
      <div className="banner-text trasparent-bg">
        <h2>Your Online Journal Application</h2>
        <p>Pen down your thoughts and feelings on the go.</p>
        <Link to="/signup">
          <button className="submit-btn">Get Started</button>
        </Link>
      </div>
    </div>
    <p className="footer ">copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
  </div>
);
export default Home;
