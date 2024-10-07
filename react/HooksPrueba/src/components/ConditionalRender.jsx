

function ConditionalRender() {
  let booleano = false;

  return (
    <div>
      {booleano ? (
      <div>
        <h1>Booleano es True</h1> 
        <h2>waos</h2>
      </div> 
      ) : 
      <h1>Booleano es False</h1>
      }
      {/* {booleano && <h1>Booleano es False</h1>} */}
    </div>
  )
}

export default ConditionalRender