import React, { useEffect, useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const InteractionsComp = () => {
    
  return (
    <div className='agg'>
        <Container fluid className="interac">
            <Row className="rw-interac">
                <Col md={6}>
                    <h1>Build Interactions Visually Website for Your Company</h1>
                    <p>Intrinsicly impact resource sucking initiatives with 24/7 relationships communicate integrated products via synergistic leadership skills. Conveniently pursue future-proof web services through empowered bandwidth.</p>
                    <Row className='pt-5'>
                        <Col>
                            <h2>55%</h2>
                            <p>Compellingly engage corporate scenarios for monetize.</p>
                        </Col>
                        <Col>
                            <h2>5K+</h2>
                            <p>Conveniently target enterprise vortals for process-centric.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>55%</h2>
                            <p>Compellingly engage corporate scenarios for monetize.</p>
                        </Col>
                        <Col>
                            <h2>5K+</h2>
                            <p>Conveniently target enterprise vortals for process-centric.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>
    </div>
  )
}

export default InteractionsComp