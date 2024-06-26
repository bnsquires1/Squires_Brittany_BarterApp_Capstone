import { ReviewCard } from "./Review";

export default function reviewsList({ reviews, setReviews, baseUrl }) {
    const editCard = async (id) => {
      try {
        const response = await fetch(`${baseUrl}/reviews/${id}`, {
          method: 'PATCH'
        });
  
        if (response.status !== 200) {
          return;
        }
        const editProduct = await response.json();
  
        
        setReviews();
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <ul className="ReviewsList">
        {products.length ? (
          products.map((p) => {
            return <ReviewCard key={p._id} product={p} editCard={editCard}/>;
          })
        ) : (
          <p>No Products Found </p>
        )}
      </ul>
    );
  }
  