import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const {userInput,getUserInput} = this.props
    return(
      <div className="App-input-container">
        <input className="App-input" type="text" value={userInput} onChange={getUserInput} placeholder="Buscar por nombre"/>
      </div>
    );
  }
}

Filters.propTypes = {
  userInput:PropTypes.string.isRequired,
  getUserInput:PropTypes.func.isRequired
};
export default Filters;