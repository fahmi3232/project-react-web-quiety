import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import FadeIn from 'react-fade-in'

const FeaturesSub = () => {
  const [isVisible, setVisible] = useState(true)

  const domRef = React.useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])


  const [data, setData] = useState([
    {
      id: 1,
      image: "https://placeimg.com/640/480/any",
      title: "Quality First",
      deskripsi:
        "Professionally integrate high standards applications before user friendly leadership skills.",
    },
    {
      id: 2,
      image: "https://placeimg.com/640/480/arch",
      title: "Communication",
      deskripsi:
        "Professionally integrate high standards applications before user friendly leadership skills.",
    },
    {
      id: 3,
      image: "https://placeimg.com/640/480/arch/grayscale",
      title: "Reliability",
      deskripsi:
        "Professionally integrate high standards applications before user friendly leadership skills.",
    },
  ]);


  return (
    <div>
      <Container className="features-sub">
        <Row ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          {data.map((dat) => (
            <Col className="ijij" md={4} xs={12}>
              <Card className="crd" style={{ width: "22rem", borderRadius: 10 }}>
                <Card.Img variant="top" className="img-a" src={dat.image} />
                <Card.Body className="card-bd">
                  <Card.Title>{dat.title}</Card.Title>
                  <Card.Text>
                    {dat.deskripsi}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSub;
