import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from 'react-bootstrap';

function NavTabs() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="./favicon.ico" style={{ marginRight: 10 }}></img>
        <a className="navbar-brand" href="/">
          Mary Jenkin
        </a>
      </nav>
      <Col md="auto">
        <ul className="nav nav-tabs">
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
        </ul>
      </Col>
    </div>
  );
}

export default NavTabs;
