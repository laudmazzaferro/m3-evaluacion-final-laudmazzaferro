const API = 'https://rickandmortyapi.com/api/character/';

const fetchCharapters= ()=>{
  return fetch(API).then(response => response.json())
}

export {fetchCharapters}