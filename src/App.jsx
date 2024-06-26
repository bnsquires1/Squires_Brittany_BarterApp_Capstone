import React, {useState, useEffect} from 'react';
// import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LikeButton from './components/LikeButton/LikeButton';
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import NewForm from './components/NewForm';
import ProductList from './components/ProductList';

// function App() {
  const App = () => {
    const [products, setProducts] = useState([]);

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


  return (

    <div>
      {/* <BrowserRouter> */}
        <ThemeProvider>
        <Navbar />

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
        {/* <Routes> */}
          {/* <Route path='/' element= {<Shop/>}/> */}
     
        <ThemeToggle />
        <LikeButton />
      <div>
    </div>
        {/* </Routes>  */}
    </ThemeProvider>
    {/* </BrowserRouter> */}
    </div>  
  )
}

export default App
