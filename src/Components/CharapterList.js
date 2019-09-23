import React from 'react';
import PropTypes from 'prop-types';
import CharapterCard from './CharapterCard';

class CharapterList extends React.Component {
  
  render() {
    const { charapters, userInput } = this.props
    return (
      <ol className="charapterList">
        {charapters
        .filter(charapter => charapter.name.toUpperCase().includes(userInput.toUpperCase()))
        .map(charapter => {
          return (
            <li className="charapter" key={charapter.id}>
              <CharapterCard charapter={charapter} />
            </li>
          );
        })}

      </ol>


    );
  }
}

CharapterList.propTypes = {
  charapters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharapterList;
