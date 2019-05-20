import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {Form} from "react-bootstrap";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Contact() {
    return(
        <div>
            <Jumbotron></Jumbotron>
            <br></br>
            <Container>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Write your thoughts</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
            </Container>
  
      </div>
    );
};

export default Contact