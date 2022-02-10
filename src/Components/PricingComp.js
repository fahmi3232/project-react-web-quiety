import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PricingSubOne from "./PricingSubOne";

const PricingComp = () => {
  return (
    <div>
      <Container className="pricing">
        <Row>
          <Col>
            <h5>Pricing</h5>
            <h1>Check Our Valuable Price</h1>
            <p>
              Conveniently mesh cooperative services via magnetic outsourcing.{" "}
              <br /> Dynamically grow value whereas accurate e-commerce vectors.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <PricingSubOne />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingComp;
