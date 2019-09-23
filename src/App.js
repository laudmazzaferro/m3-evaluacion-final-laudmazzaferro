import React from 'react';
import './App.css';
import { fetchCharapters } from './services/fetchCharapters'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      charapters:[]
    }
  }
  componentDidMount(){
    this.getCharapters();
  }
  getCharapters(){
    fetchCharapters()
      .then(data =>{
        this.setState({
          charapters:data.results
        });
      });
  };

 render(){
  const {charapters}=this.state
  return (
    <React.Fragment>
      <header>hola</header>
      <h1>Lista de artores</h1>
      <div className="App">
        <ul className="charapterList">
          {charapters.map(charapter =>{ 
            return(
              <li className="charapter" key={charapter.id}>

                <div className="card">
                  <div className="card__img">
                    <img src={charapter.image} alt={`Imagen de${charapter.name}`}/>
                  </div>
                  <h2 className="card__name">{charapter.name}</h2>
                  <p className="card__specie">{charapter.species}</p>
                </div>
                
              </li>
            );
          })}

        </ul>
      
      </div>
    </React.Fragment>
  );
 }
}

export default App;
