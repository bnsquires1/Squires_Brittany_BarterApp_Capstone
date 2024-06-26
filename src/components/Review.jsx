export const ReviewCard = ({ review, editCard }) => {
    return (
      <div className="card mb-2">
        <a target="blank" href={review.link}>
          {""}
          {review.}
        </a>
  
        <p>{product.description}</p>
  
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
        <button
          onClick={() => {
            deleteCard(product._id);
          }}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default ProductCard;