import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect, useRef} from "react";
import { Col, Container, Row } from "react-bootstrap";
import daskit from '../img/dashkit.png'
import { faBezierCurve, faCode, faShield } from "@fortawesome/free-solid-svg-icons";
import Shape from '../img/shape/shape.svg'


const style={fontSize: 40, backgroundColor: "red", padding: 15, borderRadius: 15}

const IncreasingComp = () => {

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
      <Container ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
        <Row className="incre">
          <Col md={6} xs={12} className="da">
              <FontAwesomeIcon style={style}  icon={faShield} />
            <h1 className="pt-4">Increasing Business Success With Technology</h1>
            <p>
              Uniquely benchmark multifunctional catalysts for change via
              manufactured products brand scalable products. Network orthogonal
              infomediaries through pandemic initiatives.
            </p>
            <Row className="mt-5">
                <Col md={2}>
                <FontAwesomeIcon style={{fontSize: 30}} icon={faBezierCurve} />
                </Col>
                <Col md={10}>
                    <h3>Pixel Perfect Design</h3>
                    <p>Credibly syndicate enterprise total linkage whereas cost effective of the art data without multifunctional.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={2}>
                <FontAwesomeIcon style={{fontSize: 30}} icon={faCode} />
                </Col>
                <Col md={10}>
                    <h3>Pixel Perfect Design</h3>
                    <p>Credibly syndicate enterprise total linkage whereas cost effective of the art data without multifunctional.</p>
                </Col>
            </Row>
          </Col>
          <Col md={6} xs={12}>
          <img src={daskit} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IncreasingComp;
