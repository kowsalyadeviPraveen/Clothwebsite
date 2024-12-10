import React from 'react'
import './Hero.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import hero1 from '../Assests/hero1.webp'
import hero2 from '../Assests/hero2.webp'
import hero3 from '../Assests/hero3.webp'

import hero_kid from '../Assests/hero_kids1.avif'
import hero_men from '../Assests/hero_men1.avif'
import hero_women from '../Assests/hero_women.webp'
import hero_trending from '../Assests/hero_trending.png'

const Hero = () => {
    return (
        <div className='hero'>

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={hero1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={hero2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={hero3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Categories Section */}
            <Container className="category-section">
                <h2 className="section-heading">Explore & Shop</h2>
                <Row>
                    {/* Trending Section */}
                    <Col sm={3} md={6} lg={3}>
                    <Link  to="/trending"  style={{ textDecoration: 'none' }}>
                        <Card className="category-card">
                            <Card.Img className="card-img" variant="top" src={hero_trending} alt="Trending" />
                            <Card.Body>
                                <Card.Title className="title">Trending</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    {/* Women Section */}
                    <Col sm={3} lg={3}>
                    <Link  to="/women"  style={{ textDecoration: 'none' }}>
                        <Card className="category-card">
                            <Card.Img className="card-img" variant="top" src={hero_women} alt="Women" />
                            <Card.Body>
                                <Card.Title className="title">Women</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    {/* Men Section */}
                    <Col sm={3} lg={3}>
                    <Link  to="/men"  style={{ textDecoration: 'none' }}>
                        <Card className="category-card">
                            <Card.Img className="card-img" variant="top" src={hero_men} alt="Men" />
                            <Card.Body>
                                <Card.Title className="title">Men</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    {/* Kids Section */}
                    <Col sm={3} lg={3}>
                    <Link  to="/kid"  style={{ textDecoration: 'none' }}>
                        <Card className="category-card">
                            <Card.Img className="card-img" variant="top" src={hero_kid} alt="Kids" />
                            <Card.Body>
                                <Card.Title className="title">Kids</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Hero
