import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import { LoginPage } from './components/login-page'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<LoginPage/>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
