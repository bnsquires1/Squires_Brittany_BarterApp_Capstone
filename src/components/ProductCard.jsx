import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="card mb-2">
      <img
        src={require(`../assets/${image}`).default}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-text">${price.toFixed(2)}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
