import React, { useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const PricingSubTwo = () => {
  const [price, setPrice] = useState([
    {
      id: 1,
      title: "Starter",
      harga: "$25",
      month: "/month",
      fitur1: "1 Team",
      fitur2: "1 Installed Agent",
      fitur3: "Real-Time FeedBack",
      fitur4: "Video, Dedicated Support",
      fitur5: "1 Attacked Targets Per Month",
      fitur6: "Team Collaboration Tools",
      fitur7: "Automated Updated Features",
      fitur8: "24/7 Life time Support"
    },
    {
      id: 2,
      title: "Advanced",
      harga: "$45",
      month: "/month",
      fitur1: "5 Team",
      fitur2: "3 Installed Agent",
      fitur3: "Real-Time FeedBack",
      fitur4: "Video, Dedicated Support",
      fitur5: "24 Attacked Targets Per Month",
      fitur6: "Team Collaboration Tools",
      fitur7: "Automated Updated Features",
      fitur8: "24/7 Life time Support"
    },
    {
      id: 3,
      title: "Premium",
      harga: "$75",
      month: "/month",
      fitur1: "6 Team",
      fitur2: "8 Installed Agent",
      fitur3: "Real-Time FeedBack",
      fitur4: "Video, Dedicated Support",
      fitur5: "40 Attacked Targets Per Month",
      fitur6: "Team Collaboration Tools",
      fitur7: "Automated Updated Features",
      fitur8: "24/7 Life time Support"
    },
  ]);
  return (
    <div>
      <Container className="mt-5 sub-pricing-two">
        <Row>
          {price.map((prc) => {
            return (
              <Col className="dar">
                <Card className="crd1" style={{ width: "21rem" }}>
                  <Card.Body>
                    <Card.Title>{prc.title}</Card.Title>
                    <Card.Title className="price">
                      <span>{prc.harga}</span> {prc.month}
                    </Card.Title>
                    <Card.Text className="uli">
                      <ul>
                        <li>{prc.fitur1}</li>
                        <li>{prc.fitur2}</li>
                        <li>{prc.fitur3}</li>
                        <li>{prc.fitur4}</li>
                        <li>{prc.fitur5}</li>
                        <li>{prc.fitur6}</li>
                        <li>{prc.fitur7}</li>
                        <li>{prc.fitur8}</li>
                      </ul>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default PricingSubTwo;
