import React from 'react';
import PropTypes from 'prop-types';
import './CharapterCard.scss'

class CharapterCard extends React.Component {
  render() {
    const {charapter}=this.props
    return (
      <div className="card">
        <div className="card__img-container">
          <img src={charapter.image} alt={`Imagen de${charapter.name}`} className="card__img"/>
        </div>
        <div className="card__name-specie">
          <h2 className="card__name">{charapter.name}</h2>
          <p className="card__specie">{charapter.species}</p>
          <p>{charapter.episode.length}</p>
        </div>
      </div>
    );

  }
}

CharapterCard.propTypes = {
  charapter: PropTypes.object.isRequired
};

export default CharapterCard;
