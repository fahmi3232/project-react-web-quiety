import React, {useState, useEffect, useRef} from "react";
import { Col, Container, Row } from "react-bootstrap";

const FeaturesComp = () => {
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
    <div className="features">
      <Container>
        <Row ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
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
