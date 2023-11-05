import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './component/HomePage'
import Category from './component/Category'
import MainMenu from './component/MainMenu';
import Footer from './component/Layout/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <header>
          <MainMenu />
        </header>
        <Routes>
          {/* <Route path="/notes" element={<Notes />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
        <Footer /> 
    </Router>
  )
}

export default App
