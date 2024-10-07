import { useState } from "react"
import { HistorialContext } from "../App"
import { useContext } from "react"

function Child() {
  const [count, setCount] = useContext(HistorialContext)

  

  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={() => {
        setCount((prev) => prev+1)
      }}
      >waos</button>
    </div>
  )
}

export default Child