import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navColor = useRef(null);
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 400) {
      // if user scrolled > 400px add bg
      navColor.current.classList.add("navbar-color");
    } else {
      // else no bg
      navColor.current.classList.remove("navbar-color");
    }
  });

  return (
    <>
      <nav>
        <header className="header-upper position-fixed">
          <div ref={navColor} className="navbar">
            <ul className="nav-links mt-2">
              <li>
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" to="event">
                  Events
                </Link>
              </li>

              <li>
                <Link className="links" to="blogs">
                  Blogs
                </Link>
              </li>

              <li>
                <Link className="links" to="aboutus">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="links" to="contact">
                  Contact
                </Link>
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
