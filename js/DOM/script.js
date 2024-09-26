document.addEventListener('DOMContentLoaded', function() {
/*   let etiquetas = document.querySelectorAll('h3');

  etiquetas.forEach(etiqueta => {
    etiqueta.style.color = 'blue';
  }) */

  let input = document.querySelector('input[type="number"]');
  input.style.backgroundColor = 'red';
  console.log(input.value)

  let div = document.createElement('div');
  let p = document.createElement('p');
  p.innerHTML = 'Hola mundo';
  div.className = 'container';
  div.className += ' hola';
  div.id = 'container';
  console.log(div.classList)
  
  div.appendChild(p)

  document.body.append(div)
})
