import PropTypes from 'prop-types';

function Componente({nombre}){
  return (
    <>
      <h2>Hola {nombre}</h2>
    </>
  )
}

Componente.propTypes = {
  nombre: PropTypes.string.isRequired
}

export default Componente;