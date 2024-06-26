import ProductCard from "./ProductCard";

export default function ProductList({ products, setProducts, baseUrl }) {
  const deleteCard = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/products/${id}`, {
        method: 'DELETE'
      });

      if (response.status !== 200) {
        return;
      }
      const deletedProduct = await response.json();

      const filtered = products.filter((b) => b._id !== data.id);

      setProducts(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className="ProductList">
      {products.length ? (
        products.map((p) => {
          return <ProductCard key={p._id} product={p} deleteCard={deleteCard}/>;
        })
      ) : (
        <p>No Products Found </p>
      )}
    </ul>
  );
}
