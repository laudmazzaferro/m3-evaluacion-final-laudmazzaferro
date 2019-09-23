import React from 'react';
import './App.css';
import { fetchCharapters } from './services/fetchCharapters'
import CharapterList from './Components/CharapterList'
import Filters from './Components/Filters'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charapters: [],
      userInput: ''
    }
    this.getUserInput = this.getUserInput.bind(this);
  }
  componentDidMount() {
    this.getCharapters();
  }
  getCharapters() {
    fetchCharapters()
      .then(data => {
        this.setState({
          charapters: data.results
        });
      });
  };

  getUserInput(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      userInput: inputValue
    })

  }

  render() {
    const { charapters, userInput } = this.state
    return (
      <div className="App">
        <header>hola</header>
        <h1>Lista de personajes </h1>
        <Filters
          userInput={userInput}
          getUserInput={this.getUserInput}
        />
        <CharapterList
          charapters={charapters}
          userInput={userInput}
        />
      </div>
    );
  }
}

export default App;
