import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

const CharapterDetail = props => {
  const { routerProps, charapters } = props;
  const chapId = parseInt(routerProps.match.params.chapId);
  const charapter = charapters.filter(item => item.id === chapId);

  if (charapter[0]) {
    const { name, image, status, species, origin, episode } = charapter[0];
    return (
      <React.Fragment>
      
        <div className="detail-container">
          <div className="detail-img-container">
            <img className="detail-img" src={image} alt={name} />
          </div>
          <div className="detail-charapter-container">
            <h3 className="detail-title">{`${name}`}</h3>
            <ul>
              <li className={`detail-li ${(status === 'Alive') ? '' : 'hidden'}`}>{`Status: ${status} `}<i className="fas fa-heart"></i> </li>
              <li className={`detail-li ${(status === 'Dead') ? '' : 'hidden'}`}>{`Status: ${status} `}<i className="fas fa-skull-crossbones"></i></li>
              
              <li className={`detail-li ${(status === 'unknown') ? '' : 'hidden'}`}>{`Status: Unknown `}<i className="fas fa-question-circle"></i></li>
              {(species === 'Alien') ? <li className="detail-li">{`Species: ${species} `}<i class="fab fa-reddit-alien"></i></li> : <li className="detail-li">{`Species: ${species}`}</li>}
              <li className="detail-li">{`Origin: ${origin.name}`}</li>
              <li className="detail-li">{`Episodes: ${episode.length}`}</li>
            </ul>
          </div>
          <Link to="/" className="app__back">{'<  Volver'}</Link>
        </div>
        
      </React.Fragment>
    );
    } else {
      return (
        <React.Fragment>
          <p>Personaje no existente</p>
          <Link to="/" className="app__back">Volver al listado</Link>
        </React.Fragment>
      )
    }
}

CharapterDetail.propTypes = {
  charapters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired,
};

export default CharapterDetail;