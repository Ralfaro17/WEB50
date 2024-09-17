import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"

function Homepage() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    if (count === 10) {
      navigate('/about')
    }
  }, [count, navigate])

  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Homepage</h1>
      <Button variant="destructive" onClick={
        () => {
          setCount(count + 1)
        }
      }>Contador: {count}</Button>
    </div>
  )
}

export default Homepage