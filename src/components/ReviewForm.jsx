import { useRef } from "react";

export default function reviewForm ({ reviews, setReviews, baseUrl}) {
    const nameRef = useRef(null);
    const productRef = useRef(null);
    const desRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newReview = {
                company: nameRef.current.value,
                product: productRef.current.value,
                review: desRef.current.value,
            };

            const response = await fetch(`${baseUrl}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview)
            });

            if (response.status !== 201) {
                return;
            }

            const createdReview = await response.json();

            setReviews([...reviews, createdReview]);

            nameRef.current.value = "";
            productRef.current.value = "";
            desRef.current.value = "";
            

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <form onSubmit={handleSubmit} className="reviewForm">
        <h5>Leave a Review!</h5>
        Company: <input type="text" ref={nameRef} />
        <br />
        Product/Service: <input type="text" ref={productRef} />
        <br />
        Review: <input type="text" ref={desRef}/>
        <br />
        <input type="submit" value="Post Review" />
        <input type="submit" value="Edit Review" />
        <input type="submit" value="Delete Review" />

    </form>

    )
}