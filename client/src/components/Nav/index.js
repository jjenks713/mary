import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Nav } from 'react-bootstrap';

const textDec = {
  textDecoration: "none"
}
function NavTabs() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <Row>
          <Col>
            <div>
              <img src="./capture.jpg"></img>
              {/* <h1 className="text-secondary" style={{ fontFamily: "Tangerine, cursive", fontSize: 50 }}>MJ</h1> */}
              {/* <a className="navbar-brand" href="/" style={{ fontFamily: "Dokdo, cursive", fontSize: 50 }}>
              Mary Jenkin
        </a> */}
            </div>
          </Col>
        </Row>
      </nav>

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
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/saved"
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Browse</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/blog" className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}>Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
        </Nav.Item>
      </Nav>

    </div>
  );
}

export default NavTabs;
