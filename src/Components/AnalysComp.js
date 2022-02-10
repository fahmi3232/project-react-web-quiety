import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import widget from "../img/screen/widget-7.png";

const style = {
  fontSize: 40,
  backgroundColor: "blue",
  padding: 15,
  borderRadius: 15,
};

const AnalysComp = () => {
    
  return (
    <div>
      <Container className="analys">
        <Row className="rw-anal">
          <Col className="da" md={7} xs={12}>
            <img src={widget} alt="" />
          </Col>
          <Col md={5} xs={12}>
            <FontAwesomeIcon style={style} icon={faShield} />
            <h1 className="pt-4">Advanced Analytics, Understand Business</h1>
            <p>
            Distinctively promote parallel vortals with ubiquitous e-markets. Proactively benchmark turnkey optimize next-generation strategic leadership without resource sucking ideas.
            </p>
            <Row className="py-3">
                <Col>
                    <ul>
                        <li>Thought leadership</li>
                        <li>Modernized prospecting</li>
                        <li>TShowcasing success</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>Thought leadership</li>
                        <li>Modernized prospecting</li>
                        <li>TShowcasing success</li>
                    </ul>
                </Col>
            </Row>
            <h6>Know More About Us</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnalysComp;
