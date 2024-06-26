import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Routes} from 'react-router-dom';
import LikeButton from './components/LikeButton/LikeButton';
// import { ThemeProvider } from './context/ThemeContext'
// import ThemeToggle from './components/ThemeToggle';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import NewForm from './components/NewForm';
import ProductList from './components/ProductList';
import ReviewForm from './components/ReviewForm';

  const App = () => {
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    const baseUrl ='https://barter-backend-dkjw.onrender.com';

    useEffect(() => {
      const getProducts = async () => {
        try {
          const response = await fetch(`${baseUrl}/products/allproducts`)

          if(response.status !== 200) {
            return
          }
          const data = await response.json()

          setProducts(data)
        } catch (err) {
          console.log(err)
        }
      }

      getProducts()
    }, [])

    useEffect(() => {
      const getReviews = async () => {
        try {
          const response = await fetch(`${baseUrl}/reviews`)

          if(response.status !== 200) {
            return
          }
          const data = await response.json()

          setReviews(data)
        } catch (err) {
          console.log(err)
        }
      }
      getReviews()
    }, [])

  return (

    <div>
      {/* <BrowserRouter> */}
        <Navbar />

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <NewForm 
      products={products}
      setProducts={setProducts}
      baseUrl={baseUrl}
      />

      <ProductList 
      products={products} 
      setProducts={setProducts}
      baseUrl={baseUrl}
      />
      <ReviewForm
      reviews={reviews}
      setReviews={setReviews}
      baseUrl={baseUrl}
      />
      <LikeButton />
        {/* <Routes> */}

     
        {/* <ThemeToggle /> */}
        {/* </Routes>  */}
    {/* </BrowserRouter> */}
    </div>  
  )
}

export default App
