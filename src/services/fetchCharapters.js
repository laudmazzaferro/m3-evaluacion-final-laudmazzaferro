//const API = 'https://rickandmortyapi.com/api/character/';
const API = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

const fetchCharapters= ()=>{
  return fetch(API).then(response => response.json())
}

export {fetchCharapters}