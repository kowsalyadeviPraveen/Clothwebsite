import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './NewArraival.css';
import { New } from '../Assests/new';
import Banner1 from '../Assests/banner/banner1.jpg'
import Banner2 from '../Assests/banner/banner2.webp'
  
const NewArrival = () => {
  return (
    <div>
      <div className='banner1'>
        <img src={Banner2} alt="banner1"/>
      </div>
      
      <Container className="new">
      <h2 className="section-heading">New In</h2>
              <Row xs={2} >
          {New.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3} >
              <Card className="new-card">
                <Card.Img
                  className="newcard-img"
                  variant="top"
                  src={item.image}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title className="new-title">{item.name}</Card.Title>
                  <Card.Text>
                    <span className="new-price">₹{item.new_price}</span>{' '}
                    <span className="old-price">₹{item.old_price}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className='banner1'>
        <img src={Banner1} alt="banner1"/>
      </div>
    </div>
  );
};

export default NewArrival;
