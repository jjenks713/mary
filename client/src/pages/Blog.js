import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Construct from "./construction.png";


function Contact() {
    var imageStyle = {
        width: 1000
    }

    return(
        <div>
            <Jumbotron></Jumbotron>
            <br></br>
            <Container>
                <Row>
                <img src={Construct} style={imageStyle}></img>
                </Row>

            </Container>

      </div>
    );
};

export default Contact