import React, {useState, useEffect, useRef} from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../img/screen/animated-screen-5.svg";
import client1 from '../img/clients/client-1.svg'
import client2 from '../img/clients/client-2.svg'
import client3 from '../img/clients/client-3.svg'

const Home = () => {
  const [isVisible, setVisible] = useState(true)

  const domRef = React.useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <div>
      <Container className="home" fluid>
        <Container ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <Row className="rw">
            <Col md={6}>
              <h1>Business Intelligence & Data Analysis</h1>
              <p>
                Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services.
              </p>
              <Row style={{textAlign: 'left'}}>
                <Col md={6} xs={6}>
                  <button className="btn btn-danger">Request For Demo</button>
                </Col>
                <Col md={6} xs={6}>
                  <button className="btn btn-dark" style={{marginLeft: -90}}>Watch Demo</button>
                </Col>
              </Row>
              <h5 style={{color: "grey"}} className="py-4">Trusted By 5000+ Worldwide Customers:</h5>
              <Row>
                <Col md={4} xs={4}>
                  <img className="client-img" src={client1} alt="" />
                </Col>
                <Col md={4} xs={4}>
                  <img className="client-img" src={client2} alt="" />
                </Col>
                <Col md={4} xs={4}>
                  <img className="client-img" src={client3} alt="" />
                </Col>
              </Row>
            </Col>
            <Col className="img" md={6}>
              <img src={banner} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
