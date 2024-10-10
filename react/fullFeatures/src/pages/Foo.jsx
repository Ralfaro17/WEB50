import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Foo() {
  useEffect(( ) => {
    document.title = "Foo"
  })

  return (
    <div className='flex flex-col gap-10'>
      <h1>Esta es la pagina principal</h1>
      <Link to="/form">
        <Button>Ir al formulario</Button>
      </Link>
    </div>
  )
}

export default Foo