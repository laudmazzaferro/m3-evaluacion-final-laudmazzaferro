import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharapterDetail = props => {
    const { routerProps, charapters } = props;
    const chapId = parseInt(routerProps.match.params.chapId);
    const charapter = charapters.filter(item => item.id === chapId);

    if (charapter[0]){
      const {name ,image, status, species, origin, episode} = charapter[0];
      return (
        <React.Fragment>
            <div>
              <img src={image} alt={name}/>
            </div>
            <h3>{`${name}`}</h3>
            <p>{`Status:${status}`}</p>
            <p>{`Species:${species}`}</p>
            <p>{`Origin:${origin.name}`}</p>
            <p>{`Episodes:${episode.length}`}</p>
          <Link to="/" className="app__back">Volver al listado</Link>
        </React.Fragment>
        
      );
    }else {
      return(
        <React.Fragment>
        <p>Personaje no existente</p>
        <Link to="/" className="app__back">Volver al listado</Link>
        </React.Fragment>
      )
    }
}

CharapterDetail.propTypes = {
  charapters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps:PropTypes.object.isRequired,
};

export default CharapterDetail;