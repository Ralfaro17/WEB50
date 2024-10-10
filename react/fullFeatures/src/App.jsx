import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Foo from './pages/Foo'
import Forms from './pages/Forms'
import AdvancedForm from './pages/AdvancedForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Foo />} />
          <Route path="/form/:user" element={<Forms />} />
          <Route path="/form/advanced" element={<AdvancedForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
