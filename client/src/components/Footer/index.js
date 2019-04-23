import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Nav } from 'react-bootstrap';

const textDec = {
  textDecoration: "none"
}
function Footer() {
  return (
    <div>
      <footer className="navbar navbar-expand-lg navbar-black bg-white fixed-bottom justify-content-center">
        <Row>
          <Col>
            <div>
              <img src="./capture.jpg"></img>
              {/* <h1 className="text-black" style={{ fontFamily: "Tangerine, cursive", fontSize: 50 }}>MJ</h1> */}
              {/* <a className="navbar-brand" href="/" style={{ fontFamily: "Dokdo, cursive", fontSize: 50 }}>
              Mary Jenkin
        </a> */}
            </div>
          </Col>
        </Row>
      </footer>

      {/* <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Main
        </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              >
                Browse
        </Link>
            </li>
          </ul> */}
      {/* <Nav justify variant="tabs" defaultActiveKey="/" className="navbar-dark bg-dark">
        <Nav.Item>
          <Link to="/" className="nav-link active bg-dark text-white">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/saved"
            className="nav-link active bg-dark text-white">Browse</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/blog" className="nav-link active bg-dark text-white">Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" className="nav-link active bg-dark text-white">Contact</Link>
        </Nav.Item>
      </Nav> */}

    </div>
  );
}

export default Footer;