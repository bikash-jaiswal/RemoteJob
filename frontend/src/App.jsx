import { useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './component/HomePage'
import Category from './component/Category'
import MainMenu from './component/Layout/MainMenu';
import Footer from './component/Layout/Footer';
import RemoteJobsPlatformPage from './component/Jobs';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Router>
        <header>
          <MainMenu />
        </header>
        <Routes>
          {/* <Route path="/notes" element={<Notes />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/jobs" element={<RemoteJobsPlatformPage />}/>
        </Routes>
        <Footer /> 
      </Router>
    </ThemeProvider>
  )
}

export default App
