import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import EjemploAPI from './pages/EjemploAPI'
import EjemploBadSong from './pages/EjemploBadSong'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/pokemon" element={<EjemploAPI/>} />
          <Route path="/bad-song" element={<EjemploBadSong/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
