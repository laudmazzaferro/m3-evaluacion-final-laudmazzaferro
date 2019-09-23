import React from 'react';
import PropTypes from 'prop-types';

class CharapterCard extends React.Component {
  render() {
    const {charapter}=this.props
    return (
      <div className="card">
        <div className="card__img">
          <img src={charapter.image} alt={`Imagen de${charapter.name}`} />
        </div>
        <h2 className="card__name">{charapter.name}</h2>
        <p className="card__specie">{charapter.species}</p>
      </div>
    );

  }
}

CharapterCard.propTypes = {
  charapter: PropTypes.object.isRequired
};

export default CharapterCard;
