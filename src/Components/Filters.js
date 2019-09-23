import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const {userInput,getUserInput} = this.props
    return(
      <div>
        <input type="text" value={userInput} onChange={getUserInput}/>
      </div>
    );
  }
}

Filters.propTypes = {
  charapters: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Filters;