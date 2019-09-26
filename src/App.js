import React from 'react';
import './App.scss';
import { fetchCharapters } from './services/fetchCharapters'
import CharapterList from './Components/CharapterList'
import Filters from './Components/Filters'
import { Switch, Route } from 'react-router-dom';
import CharapterDetail from './Components/CharapterDetail';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charapters: [],
      userInput: '',
      selectValue:'Todos',
      statusValue:'Todos'
    }
    this.getUserInput = this.getUserInput.bind(this);
    this.getUserSelect = this.getUserSelect.bind(this);
    this.getUserStatus = this.getUserStatus.bind(this);
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
  getUserSelect(event){
    const newSelectValue = event.currentTarget.value;
    this.setState({
      selectValue:newSelectValue
    })
  }
  getUserStatus(event){
    const newStatusValue = event.currentTarget.value;
    this.setState({
      statusValue: newStatusValue
    })
  }

  render() {
    const { charapters, userInput ,selectValue, statusValue} = this.state
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Rick and Monty</h1>
        </header>
        <main className="App-main">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div className="App-main-all">
                <Filters
                  userInput={userInput}
                  getUserInput={this.getUserInput}
                  getUserSelect={this.getUserSelect}
                  getUserStatus={this.getUserStatus}
                />
                <CharapterList
                  charapters={charapters}
                  userInput={userInput}
                  selectValue={selectValue}
                  statusValue ={statusValue}
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
        <Footer/>
      </div>
    );
  }
}

export default App;
