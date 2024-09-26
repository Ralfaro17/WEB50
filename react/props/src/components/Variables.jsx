import propTypes from 'prop-types'

function Variables({ nombre, apellido }) {
  return (
    <div>
      <h1>Hola {nombre}</h1>
      <h2>Si ves mi apellido={apellido}, es porque la prop ha sido pasada, caso contrario, no</h2>
    </div>
  )
}

Variables.propTypes = {
  nombre: propTypes.string.isRequired,
  apellido: propTypes.string
}

export default Variables