import { useState, useEffect, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './components/Child'
import Mapping from './components/Mapping'
import ConditionalRender from './components/ConditionalRender'
import './App.css'

export const HistorialContext = createContext(null)

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
    return () => console.log("me he desmontado")
  }, [count])

  return (
    <HistorialContext.Provider value={[count, setCount]}>
    
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
            setCount((valorAnterior) => valorAnterior+1)
            setCount((valorAnterior) => valorAnterior+1)
            setCount((valorAnterior) => valorAnterior+1)
            setCount((valorAnterior) => valorAnterior+1)
            setCount((valorAnterior) => valorAnterior+1)
          }}>
          count is {count}
        </button>
        {/* <ConditionalRender/> */}
        {/* <Child/> */}
        <Mapping/>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
{/*         <h1>{nombre}</h1>
        <input type="text" onChange={
          (event) => setNombre(event.target.value)
        } /> */}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    </HistorialContext.Provider>
  )
}

export default App
