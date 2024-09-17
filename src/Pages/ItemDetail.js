import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { producttdata } from '../Data/Product3'; 
import { productsData } from '../Data/Products'; 
import { productsDatas } from '../Data/Product1'; 
import { productdata } from '../Data/Product2';   
import '../App.css';  

const dataSources = {
  dessert: producttdata,
  milkshake: productsData,
  pizza: productsDatas,
  waffles: productdata, 
};

function ItemDetail() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

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

  return (
    <div className="item-detail-container">
      <h1 className="item-name">{item.name}</h1>
      <img src={item.image} alt={item.name} className="item-image" />
      <p className="item-price">Price: ₹{item.Price}</p>
      <button className="order-button" onClick={() => handleAddToCart(item.id)}>Order</button>
    </div>
  );
}

const handleAddToCart = (productId) => {
  console.log(`Product ${productId} added to cart.`);
};

export default ItemDetail;
