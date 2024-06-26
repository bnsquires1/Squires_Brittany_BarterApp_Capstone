export const ProductCard = ({ product }) => {
  

  return (
    <div className="card mb-2">
      <a target="blank" href={product.imgUrl}>
        {''}
        {product.product}
      </a>

      <p>
        {product.description}
      </p>
      
      <div className="card-body">
        <a href="#" className="btn btn-primary">
           Add to Cart
         </a>
       </div>
       <button>Delete</button>
     </div>
  );
};

export default ProductCard;
