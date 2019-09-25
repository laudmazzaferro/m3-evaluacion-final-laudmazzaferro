import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const {userInput,getUserInput,getUserSelect ,getUserRadio, radioValue} = this.props
    return(
      <div className="App-input-container">
        <input className="App-input" type="text" value={userInput} onChange={getUserInput} placeholder="Buscar por nombre"/>
      <div>
        <label htmlFor="gender" id="gender" >Gender:  </label>
        <select name="gender" id="gender" onChange={getUserSelect} className="select-filter">
          <option value="Todos">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <label htmlFor="specie">All
        <input type="radio" name="specie" value="All" checked={radioValue==='All'} onClick={getUserRadio}/>
        </label>
        <label htmlFor="specie" name="specie">Alien
        <input type="radio" name="specie" value="Alien" checked={radioValue==='Alien'} onClick={getUserRadio}/>
        </label>
        <label htmlFor="specie" name="specie">Human
        <input type="radio" name="specie" value="Human" checked={radioValue==='Human'} onClick={getUserRadio}/>
        </label>
      </div>
      </div>
    );
  }
}

Filters.propTypes = {
  userInput:PropTypes.string.isRequired,
  getUserInput:PropTypes.func.isRequired,
  getUserRadio:PropTypes.func.isRequired,
  radioValue:PropTypes.string.isRequired,
};
export default Filters;