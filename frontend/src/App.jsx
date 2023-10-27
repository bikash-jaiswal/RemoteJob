import { useState } from 'react'
HomePage
import './App.css'
import HomePage from './component/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
