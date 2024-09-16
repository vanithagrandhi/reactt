import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faIceCream, faMugHot, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Sidenav from './Sidenav'; 
import '../App.css'; 

const Notifications = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Pizza', icon: faPizzaSlice, available: true, color: '#f5deb3' }, 
    { id: 2, name: 'Waffles', icon: faBowlFood, available: false, color: '#fff9c4' }, 
    { id: 3, name: 'Desserts', icon: faIceCream, available: true, color: '#ffb6c1' }, 
    { id: 4, name: 'Milkshakes', icon: faMugHot, available: false, color: '#d2b48c' }, 
  ]);

  const toggleAvailability = (id) => {
    setFoods(foods.map(food =>
      food.id === id ? { ...food, available: !food.available } : food
    ));
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} className="d-flex flex-column align-items-center" style={{ padding: '5%' }}>
          <h2 className="mt-4 mb-4 text-center">Food Availability Notifications</h2>
          <Row className="w-100 justify-content-center">
            {foods.map((food) => (
              <Col md={3} className="mb-4" key={food.id}>
                <Card className="h-100 text-center" style={{ backgroundColor: food.available ? '#e8f5e9' : '#ffebee' }}>
                  <Card.Body>
                    <FontAwesomeIcon
                      icon={food.icon}
                      size="3x"
                      className="mb-3"
                      style={{ color: food.color }}
                    />
                    <Card.Title>{food.name}</Card.Title>
                    {food.available ? (
                      <Badge pill bg="success" className="mb-3">
                        Available
                      </Badge>
                    ) : (
                      <Badge pill bg="danger" className="mb-3">
                        Not Available
                      </Badge>
                    )}
                    <Button
                      variant={food.available ? 'danger' : 'success'}
                      style={{ color: '#fff' }}
                      onClick={() => toggleAvailability(food.id)}
                    >
                      {food.available ? 'Mark as Unavailable' : 'Mark as Available'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
