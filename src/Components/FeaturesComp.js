import React, {useState, useEffect, useRef} from "react";
import { Col, Container, Row } from "react-bootstrap";

const FeaturesComp = () => {

  return (
    <div className="features">
      <Container>
        <Row>
          <Col>
            <h5>Build Quality</h5>
            <h1>Our Special Features</h1>
            <p>
              Authoritatively underwhelm excellent methodologies via premium{" "}
              <br /> expertise competitive than open-source imperatives
              disseminate.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesComp;
