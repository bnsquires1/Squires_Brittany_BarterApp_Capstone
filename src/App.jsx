import React from 'react';
import LikeButton from './components/LikeButton/LikeButton';
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle';
import './App.css'
import Navbar from './components/Navbar/Navbar';

// function App() {
  const App = () => {
  
  return (
    <ThemeProvider>
      <div className="App">
      <header className="App-header">
        <Navbar />
        <ThemeToggle />
        <p>Like this Business</p>
        <LikeButton />
      </header>
    </div>
    </ThemeProvider>  
  )
}

export default App
