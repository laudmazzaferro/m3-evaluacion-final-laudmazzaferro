import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const { userInput, getUserInput, getUserSelect, getUserRadio, radioValue} = this.props
    return (
      <div className="App-input-container">
        <input className="App-input" type="text" value={userInput} onChange={getUserInput} placeholder="Buscar por nombre" />
        <div>
          <label htmlFor="gender" id="gender">Gender:  </label>
          <select name="gender" id="gender" onChange={getUserSelect} className="select-filter" >
            <option value="Todos" >All</option>
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="radio-container">
        <h3>Specie:</h3>
        <div className="radio-label">
          <label htmlFor="specie1">
            <input onClick={getUserRadio} checked={radioValue==='All'}
              id="specie1"
              type="radio"
              value="All"
              name="species"
            />
            All
          </label>
        </div>
        <div className="radio-label">
          <label htmlFor="specie2">
            <input onClick={getUserRadio} checked={radioValue==='Human'}
              id="specie2"
              type="radio"
              value="Human"
              name="species"
            />
            Human
          </label>
        </div>
        <div className="radio-label">
          <label htmlFor="specie3">
            <input onClick={getUserRadio} checked={radioValue==='Alien'}
              id="specie3"
              type="radio"
              value="Alien"
              name="species"
            />
            Alien
          </label>
        </div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  userInput: PropTypes.string.isRequired,
  getUserInput: PropTypes.func.isRequired
};
export default Filters;