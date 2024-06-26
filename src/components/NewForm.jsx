import { useRef } from "react";

export default function NewForm ({ products, setProducts, baseUrl}) {
    const nameRef = useRef(null);
    const productRef = useRef(null);
    const desRef = useRef(null);
    const linkRef = useRef(null);
    const priceRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newProduct = {
                company: nameRef.current.value,
                product: productRef.current.value,
                description: desRef.current.value,
                img: linkRef.current.value,
                price: priceRef.current.value,
            };

            const response = await fetch(`${baseUrl}/products/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct)
            });

            if (response.status !== 201) {
                return;
            }

            const createdProduct = await response.json();

            setProducts([...products, createdProduct]);

            nameRef.current.value = '';
            productRef.current.value = '';
            desRef.current.value = '';
            linkRef.current.value = '';
            priceRef.current.value = '';

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <form onSubmit={handleSubmit} className="NewForm">
            Company: <input type="text" ref={nameRef} />
            <br />
            Product/Service: <input type="text" ref={productRef} />
            <br />
            Description: <input type="text" ref={desRef}/>
            <br />
            Upload Img: <input type="text" ref={linkRef}/>
            <br />
            Price: <input type="text" ref={priceRef} />
            <br />
            <input type="submit" value="Create New Product" />
        </form>
    );
}