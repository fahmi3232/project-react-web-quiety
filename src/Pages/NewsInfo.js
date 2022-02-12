import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const NewsInfo = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      let res = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      setArticles(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div>
      <Container fluid>
        <Container className="news">
          <Row>
            {articles.map((arti, index) => {
              return (
                <Col md={3} xs={6}>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img variant="top" src={arti.imageUrl} width={200} height={150} />
                    <Card.Body>
                      <Card.Title><h5>{arti.title}</h5></Card.Title>
                      <Card.Text>
                        <p>{arti.summary}</p>
                      </Card.Text>
                      <Button variant="primary">
                          <a style={{textDecoration: "none", color: "white"}} href={arti.url}>Detail</a>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default NewsInfo;
