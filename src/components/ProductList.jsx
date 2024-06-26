export default function ProductList ({products}) {
    return (
        <ul className="ProductList">
            {
                products.length ?
                products.map((p) => {
                    return <p>{p.product}</p>
                })

                :

                <p>No Products Found </p>
            }

        </ul>
    )
}

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://barter-backend-os95.onrender.com')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product} - ${product.price}
//             <button>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;