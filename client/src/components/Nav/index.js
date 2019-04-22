import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Nav } from 'react-bootstrap';

function NavTabs() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <Row>
          <Col>
            <div>
              <img src="./favicon.ico" style={{ marginRight: 10 }}></img>
              <a className="navbar-brand" href="/" style={{ fontFamily: "Oswald" }}>
                Mary Jenkin
        </a>
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
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/saved"
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Browse</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/blog">Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact</Link>
        </Nav.Item>
      </Nav>

    </div>
  );
}

export default NavTabs;
