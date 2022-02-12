import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logoc from "../img/logo-color.png";

const FooterComp = () => {
  const [em, se] = useState("");
  const [d, sd] = useState("");

  const hs = (e) => {
    e.preventDefault();
    sd(`Email: ${em}`);
    se("");
  };
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <img src={Logoc} alt="" />
            <p className="mt-3">
              Our latest news, articles, and resources, we will sent to your
              inbox weekly.
            </p>
              <Form onSubmit={hs}>
            <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={em}
                      onChange={(e) => se(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
            </Row>
              </Form>
            <h4>{d ? d : ""}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
