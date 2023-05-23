import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <header className="header-upper position-fixed">
          <div className="navbar">
            <ul className="nav-links mt-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link href="event">Events</Link>
              </li>

              <li>
                <Link to="blogs">Blogs</Link>
              </li>

              <li>
                <Link href="aboutus">About Us</Link>
              </li>

              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
            <button className="btn btn-outline-secondary event-btn">
              Book Events
            </button>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
