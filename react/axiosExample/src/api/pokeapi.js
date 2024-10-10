import axios from "axios";

const base_url = "https://pokeapi.co/api/v2/"

export const fetchPokemon = (name) =>{
  return axios.get(`${base_url}pokemon/${name}`)
}

export const postPokemon = (name, body) =>{
  return axios.post(`${base_url}pokemon/${name}`, body)
}

/* 
export const fetchNormalPokemon = (name) =>{
  return fetch(`${base_url}pokemon/${name}`).then(response => {
    console.log(response.)
    return response.json()
})
} */

