import { useState, useEffect } from "react"

function Mapping() {
  const [valores, setValores] = useState(["foo", "bar", "baz"])
  
  useEffect(() => {
    let nuevosValores = [...valores]
    nuevosValores.push("waos")
    setValores(nuevosValores)
  }, [])




  return (
    <div>
      {valores.map((element, index) => {
        
        if(element === "bar") {
          element = "waos"
        }

        return (
          <h1 key={index}> {element} tiene indice {index+5} </h1>
        )
      })}
    </div>
  )
}

export default Mapping