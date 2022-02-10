import { faCalendarCheck, faCalendarTimes, faCreditCard, faIdCard, faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PricingSubTwo from "./PricingSubTwo";

const PricingSubOne = () => {
  return (
    <div>
      <Container className="pricing-sub">
        <Row>
          <Col>
            <Row>
              <Col md={2}>
                <FontAwesomeIcon className="icn-1" icon={faCreditCard} />
              </Col>
              <Col md={10}>
                <h3>No credit card required</h3>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={2}>
                <FontAwesomeIcon className="icn-2" icon={faCalendarCheck} />
              </Col>
              <Col md={10}>
                <h3>Get 30 day free trial</h3>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={2}>
                <FontAwesomeIcon className="icn-3" icon={faCalendarTimes} />
              </Col>
              <Col md={10}>
                <h3>Cancel anytime</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <PricingSubTwo />
    </div>
  );
};

export default PricingSubOne;
