import React from 'react';
import './App.scss';
import { fetchCharapters } from './services/fetchCharapters'
import CharapterList from './Components/CharapterList'
import Filters from './Components/Filters'
import { Switch, Route } from 'react-router-dom';
import CharapterDetail from './Components/CharapterDetail';

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
        
        <header className="App-header">
          <h1 className="App-title">L </h1>
        </header>
        <main className="App-main">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
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
          }} />

          <Route path="/charapter-detail/:chapId" render={routerProps => {
            return (
              <CharapterDetail 
                routerProps={routerProps}
                charapters={charapters}
              />
            );
          }}/>

        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
