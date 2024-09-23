import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { producttdata } from '../Data/Product3'; 
import { productsData } from '../Data/Products'; 
import { productsDatas } from '../Data/Product1'; 
import { productdata } from '../Data/Product2';   
import { CartContext } from '../Single/CartContext';  
import '../App.css'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


const dataSources = {
  dessert: producttdata,
  milkshake: productsData,
  pizza: productsDatas,
  waffles: productdata, 
};

function ItemDetail() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const data = dataSources[category];

    if (data) {
      const foundItem = data.find(item => item.id === parseInt(id));
      setItem(foundItem);
    } else {
      console.error(`Data for category "${category}" not found.`);
    }
  }, [category, id]);

  if (!item) {
    return <p className="not-found">Item not found or category does not exist.</p>;
  }

  const handleAddToCart = () => {
    addToCart(item); 
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="item-detail-container">
      
      <h1 className="item-name">{item.name}</h1>
      <p className='cart-button1'>
        <FontAwesomeIcon icon={faCartShopping} className="fa-cart-shopping1" /> 
      </p>
      <img src={item.image} alt={item.name} className="item-image" />
      <p className="item-price">Price: ₹{item.Price}</p>
      <button className="order-button" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartShopping} />Add to Cart</button>
    </div>
  );
}

export default ItemDetail;
