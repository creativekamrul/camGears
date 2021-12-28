import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer custom-container">
      <Row>
        <Col md={4}>
          <div className="footer-about">
            <div className="logo">
              <Link to="/">camGears</Link>
            </div>
            <p className="text-light mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dignissim enim eget odio vulputate, nec aliquet nisl egestas. Ut
              quis dapibus orci. Mauris interdum, lorem vel ornare efficitur
            </p>
            <div className="footer-icons">
                <Link to="/"><FaFacebookF /></Link>
                <Link to="/"><FaInstagram /></Link>
                <Link to="/"><FaTwitter /></Link>
            </div>
          </div>
        </Col>

        <Col md={4}></Col>
        <Col md={4}>
            <div className="footer-nav">
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/all-products">All Products</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/">Terms of Service</Link></li>
                </ul>
            </div>
        </Col>
        <Col md={12} className="footer-copyright">
            <p>&copy; camGears 2021. All Rights Reserved</p>
            <p>Developed By <a href="https://kamrulinfo.com/">Kamrul Islam</a></p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
