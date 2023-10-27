import { useState } from 'react'
HomePage
import './App.css'
import HomePage from './component/HomePage'
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container fixed disableGutters>
      <HomePage />
      </Container>
  )
}

export default App
