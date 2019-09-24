import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const {userInput,getUserInput,getUserSelect} = this.props
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
      </div>
    );
  }
}

Filters.propTypes = {
  userInput:PropTypes.string.isRequired,
  getUserInput:PropTypes.func.isRequired
};
export default Filters;