import './App.css';
import { useState, useEffect } from 'react';
import Componente from './barrel';

function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('Roger');

  let objeto = {
    nombre: 'Roger',
    edad: 20,
  };

  let { nombre: name, edad } = objeto;
  console.log(name, edad);

  /* useEffect(() => {
    alert(`esto es del useEffect y este es el valor del contador`);
  }, [contador])

  useEffect(() => {
    alert("waos")
  }) */

  return (
    <>
      {/* <h1>{contador}</h1>
      <button
        className="pijudo"
        onClick={() => setContador((contador) => contador + 1)}
      >
        Incrementar
      </button>

      <h2>{nombre}</h2>
      <input type="text" onChange={(e) => setNombre(e.target.value)} /> */}
      <Componente name={"Enyel"} />
      <a href="/react"></a>
    </>
  );
}

export default App;
