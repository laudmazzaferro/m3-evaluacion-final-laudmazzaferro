import React from 'react';
import './App.css';
import { fetchCharapters } from './services/fetchCharapters'
import CharapterList from './Components/CharapterList'

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
        <CharapterList 
        charapters={charapters}
        />
        
      </div>
    </React.Fragment>
  );
 }
}

export default App;
