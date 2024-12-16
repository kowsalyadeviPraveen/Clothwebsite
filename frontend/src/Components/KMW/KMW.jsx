import React from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import './kmw.css'
import Men1 from '../Assests/newmen1.avif'
import Men2 from '../Assests/newmen2.jfif'
import Men3 from '../Assests/newmen3.jfif'
import Men4 from '../Assests/hero_men1.avif'
import Women1 from '../Assests/newwomen1.jpg'
import Women2 from '../Assests/newwomen2.webp'
import Women3 from '../Assests/newwomen3.avif'
import Women4 from '../Assests/hero_trending.png'
import Kid1 from '../Assests/hero_kids.jpg'
import Kid2 from '../Assests/hero_kids1.avif'

export const KMW = () => {
  return (
    <div>
       <Container className="women">
        <h2 className="section-heading">Womens Collections</h2>
        <Row xs={2}>
          <Col sm={6} md={3} lg={3}>
            <Link to="/women" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Women1}
                  alt="women1"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">dress1</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1000</span>{" "}
                    <span className="old-price">₹1500</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/women" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Women2}
                  alt="women2"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">dress2</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1000</span>{" "}
                    <span className="old-price">₹1500</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/women" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Women3}
                  alt="women3"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">dress3</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1000</span>{" "}
                    <span className="old-price">₹1500</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/women" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Women4}
                  alt="women4"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">dress4</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1000</span>{" "}
                    <span className="old-price">₹1500</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
       <div className=" view text-center mt-4">
          <Link to="/women">
            <Button variant="primary">View More</Button>
          </Link>
        </div>
      </Container>
      <Container className="men">
        <h2 className="section-heading">Mens Collections</h2>
        <Row xs={2}>
         <Col sm={6} md={3} lg={3}>
            <Link to="/men" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Men1}
                  alt="men1"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">shirt1</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1200</span>{" "}
                    <span className="old-price">₹1800</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/men" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Men2}
                  alt="men2"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">shirt2</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1200</span>{" "}
                    <span className="old-price">₹1800</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/men" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Men3}
                  alt="men3"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">shirt3</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1200</span>{" "}
                    <span className="old-price">₹1800</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/men" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Men4}
                  alt="men4"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">shirt4</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹1200</span>{" "}
                    <span className="old-price">₹1800</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
       <div className=" view text-center mt-4">
          <Link to="/men">
            <Button variant="primary">View More</Button>
          </Link>
        </div>
      </Container>

      <Container className="kids">
        <h2 className="section-heading">Kids Collections</h2>
        <Row xs={2}>
         <Col sm={6} md={3} lg={3}>
            <Link to="/kids" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Kid1}
                  alt="kid1"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">kidswear1</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹800</span>{" "}
                    <span className="old-price">₹1200</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/kids" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Kid2}
                  alt="kid2"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">kidswear2</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹800</span>{" "}
                    <span className="old-price">₹1200</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/kids" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Kid1}
                  alt="kid1"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">kidswear1</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹800</span>{" "}
                    <span className="old-price">₹1200</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
         <Col sm={6} md={3} lg={3}>
            <Link to="/kids" style={{ textDecoration: "none" }}>
              <Card className="kmw-card">
                <Card.Img
                  className="kmwcard-img"
                  variant="top"
                  src={Kid2}
                  alt="kid2"
                />
                <Card.Body>
                  <Card.Title className="kmw-title">kidswear2</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹800</span>{" "}
                    <span className="old-price">₹1200</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <div className=" view text-center mt-4">
          <Link to="/kids">
            <Button variant="primary">View More</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
