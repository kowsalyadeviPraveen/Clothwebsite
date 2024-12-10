import React from 'react'
import './Hero.css'
import { Container, Row, Col, Card } from 'react-bootstrap';

import hero1 from '../Assests/hero1.webp'
import hero2 from '../Assests/hero2.webp'
import hero_kid from '../Assests/hero_kids.jpg'
import hero_men from '../Assests/hero_men.jpg'
import hero_women from '../Assests/hero_women.webp'
import hero_trending from '../Assests/hero_trending.png'

const Hero = () => {
    return (
        <div className='hero'>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={hero1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={hero2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={hero1} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <Container className="category-section">
                <h2 className="section-heading">Shop by Category</h2>
                <Row>
                    {/* Trending Section */}
                    <Col sm={3} md={6} lg={3}>
                        <Card className="category-card">
                            <Card.Img className="card-img" variant="top" src={hero_trending} alt="Trending" />
                            <Card.Body>
                                <Card.Title className="title">Trending</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Women Section */}
                    <Col sm={3}  lg={3}>
                        <Card className="category-card">
                            <Card.Img className="card-img" variant="top" src={hero_women} alt="Women" />
                            <Card.Body>
                                <Card.Title className="title">Women</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Men Section */}
                    <Col sm={3}  lg={3}>
                        <Card className="category-card">
                            <Card.Img className="card-img"  variant="top" src={hero_men} alt="Men" />
                            <Card.Body>
                                <Card.Title className="title">Men</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Kids Section */}
                    <Col sm={3}  lg={3}>
                        <Card className="category-card">
                            <Card.Img className="card-img"  variant="top" src={hero_kid} alt="Kids" />
                            <Card.Body>
                                <Card.Title className="title">Kids</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Hero
