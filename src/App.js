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
  return (
    <div>
      <header>hola</header>
    </div>
  );
 }
}

export default App;
