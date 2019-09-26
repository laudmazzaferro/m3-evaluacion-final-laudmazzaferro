import React from 'react';
import PropTypes from 'prop-types';
import CharapterCard from './../CharapterCard/CharapterCard';
import {Link} from 'react-router-dom'
import './CharapterList.scss'

class CharapterList extends React.Component {
  
  render() {
    const { charapters, userInput ,selectValue, statusValue} = this.props
    return (
      <div className="App-main-container">
      <ol className="charapterList">
        
        {charapters
        .filter(charapter => charapter.name.toUpperCase().includes(userInput.toUpperCase()))
        .filter(charapter =>(selectValue === 'Todos') ||  charapter.gender === selectValue )
        .filter(charapter =>(statusValue === 'Todos') ||  charapter.status === statusValue )
        .map(charapter => {
          return (
            <li className="charapter" key={charapter.id}>
              <Link to={`/charapter-detail/${charapter.id}`} className="charapter-link">
              <CharapterCard charapter={charapter} />
              </Link>
            </li>
          );
        })}

      </ol>
      </div>


    );
  }
}

CharapterList.propTypes = {
  charapters: PropTypes.arrayOf(PropTypes.object).isRequired,
  userInput:PropTypes.string.isRequired,
  statusValue:PropTypes.string.isRequired
};

export default CharapterList;
