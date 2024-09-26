document.addEventListener('DOMContentLoaded', function () {
  fetch("https://pokeapi.co/api/v2/pokemon/dittooo")
    .then(response => response.json())
      .then(data => {
        console.log(data)
        let img = document.querySelector('img')
        img.src = data.sprites.front_default
      })
      .catch(error => {
        console.log('Error:', error)
        return
      })
})

let fetchPokemon = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  try {
    if (response.ok) {
      console.log('Response is ok')
    } else {
      console.log('Response is not ok')
    }
  } catch (error) {
    console.log('Error:', error)
  }
  let data = await response.json()
  let img = document.querySelector('img')
  img.src = data.sprites.front_default
}