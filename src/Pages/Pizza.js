// import React from 'react';
// import { Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// import { productsDatas } from '../Data/Product1'; 
// import '../App.css'; 

// function Pizza() {
//   return (
//     <Row className='maindata'>
//       <h1 className='food1'>Pizza</h1>
//       {productsDatas.map((e) => (
//         <Col md={3} key={e.id} className="mb-4">
//           <Card style={{ width: '100%' }}>
//             <Link to={/pizza/${e.id}}>
//               <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
//             </Link>
//             <Card.Body>
//               <Link to={/pizza/${e.id}}>
//                 <Card.Title>{e.name}</Card.Title>
//               </Link>
//               <Card.Text>
               
//                 <strong>Price:</strong> ₹{e.Price}
//               </Card.Text>
           
//               <Button className="card-button" variant="primary" onClick={() => handleAddToCart(e.id)}>
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// const handleAddToCart = (productId) => {
//   console.log(Product ${productId} added to cart.);
// };

// export default Pizza;

import React, { useContext } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsDatas } from '../Data/Product1';
import '../App.css';
import { CartContext } from '../Single/CartContext'; 

function Pizza() {
  const { addToCart } = useContext(CartContext);

  return (
    <Row className='maindata'>
      <h1 className='food1'>Pizza</h1>
      {productsDatas.map((e) => (
        <Col md={3} key={e.id} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Link to={`/pizza/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} style={{ height: '200px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/pizza/${e.id}`}>
                <Card.Title className='namess-1'>{e.name}</Card.Title>
              </Link>
              <Card.Text className='namess'><strong>Price:</strong> ₹{e.Price}</Card.Text>
              <Button className="card-button" variant="primary" onClick={() => addToCart(e)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Pizza;