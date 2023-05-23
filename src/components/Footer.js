import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <FaRegNewspaper className="text-white fs-1" />
                <h2 className="mb-0 text-white" style={{
            fontSize: "24px",
          }}>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer
        className="py-4"
        style={{
          fontSize: "14px",
        }}
      >
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "18px",
                }}
              >
                Contact Us
              </h4>
              <div>
                <address className="text-white">
                  Hno : 277 Near Vill Chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+91 7976524369"
                  className="mt-3 d-block mb-1 text-white"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  +91 7976524369
                </a>
                <a
                  href="tel:+91 7976524369"
                  className="mt-2 d-block mb-0 text-white"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  yashrajoriya321@gmail.com{" "}
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="/">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-white" href="/">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="text-white" href="/">
                    <BsYoutube className="fs-5" />
                  </a>
                  <a className="text-white" href="/">
                    <BsInstagram className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "18px",
                }}
              >
                Information
              </h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  to="/privacy-policy"
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/refund-policy"
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Refund Policy
                </Link>
                <Link
                  to="/shipping-policy"
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/blogs"
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "18px",
                }}
              >
                Account
              </h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  About Us
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Faq
                </Link>
                <Link
                  to="/contact"
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4
                className="text-white mb-4"
                style={{
                  fontSize: "18px",
                }}
              >
                Quick Links
              </h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Laptops
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Headphones
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Tablets
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} ; Powered by Yash Rajoriya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
