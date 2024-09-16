import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPizzaSlice, faIceCream,faBowlFood, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap'; 
import Sidenav from './Sidenav'; 
import '../App.css'; 

const Home = () => {
  return (
    <div className="homepage">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>
        
          <section className="hero-section">
            <h1 className="hero-title">Welcome to Joy's Food Court</h1>
            <p className="hero-subtitle">Where taste meets comfort.</p>
            <button className="btn-custom">
              Explore Menu <FontAwesomeIcon icon={faUtensils} />
            </button>
          </section>

          <section className="featured-categories">
            <h2>Featured Categories</h2>
            <div className="categories-grid">
              <div className="category-card">
                <FontAwesomeIcon icon={faPizzaSlice} className="category-icon" />
                <h3>Pizza</h3>
                <p>Delicious, freshly baked pizza.</p>
              </div>

              <div className="category-card">
              <FontAwesomeIcon icon={faBowlFood}  className="category-icon" />
                <h3>Waffles</h3>
                <p>Freshly baked waffles for a delightful snack.</p>
              </div>

              <div className="category-card">
                <FontAwesomeIcon icon={faIceCream} className="category-icon" />
                <h3>Desserts</h3>
                <p>Indulge in sweet and delightful desserts.</p>
              </div>

              <div className="category-card">
                <FontAwesomeIcon icon={faMugHot} className="category-icon" />
                <h3>Milkshakes</h3>
                <p>Rich, creamy milkshakes to satisfy your cravings.</p>
              </div>
            </div>
          </section>

          <section className="popular-restaurants">
            <h2>Restaurant Images</h2>
            <div className="restaurants-grid">
              <div className="restaurant-card">
                <img src={require('../Assets/resturent5.jpeg')} alt="Burger Haven" />
                <p>The secret ingredient is always love.</p>
              </div>

              <div className="restaurant-card">
                <img src={require('../Assets/resturent4.jpeg')} alt="Pizza Planet" />
                <p>Nothing brings people together like good food.</p>
              </div>

              <div className="restaurant-card">
                <img src={require('../Assets/resturent3.jpeg')} alt="Sushi World" />
                <p>Trust us, it's gonna be good.</p>
              </div>
            </div>
          </section>

          <section className="play-area">
            <h2>Kids Playing Area</h2>
            <div className="play-area-content">
              <img src={require('../Assets/kids.jpg')} alt="Play Area" />
              <p>Our food court is not just about great food, but also a place for families to relax and have fun. The play area provides kids with a safe, fun space while parents enjoy their meal.</p>
            </div>
          </section>

        </Col>
      </Row>
    </div>
  );
}

export default Home;
