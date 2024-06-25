import React from 'react';
import ProductCard from '../ProductCard';

const BusinessCard = ({ business }) => {
  const { name, description, products } = business;

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="card-text">
          <h6>Products:</h6>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;